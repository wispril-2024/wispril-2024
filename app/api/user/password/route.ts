import { authOptions } from "../../auth/[...nextauth]/auth-options";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import PostHogClient from "@/lib/posthog-server";
import { passwordSchema } from "@/lib/zod";
import { compare, hash } from "bcrypt";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
  // Validate session
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      {
        error: "Unauthorized Request",
        message: "Sign in to update your password",
      },
      { status: 401 }
    );
  }

  // Get form data from request
  const formData = await req.formData();
  const rawData = Object.fromEntries(formData.entries());

  // Validate form data with zod
  const zodResult = passwordSchema.safeParse(rawData);

  // If zod failed, return error
  if (!zodResult.success) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: zodResult.error.issues[0].message,
      },
      { status: 400 }
    );
  }

  // Success
  const parsedData = zodResult.data;

  // Get current user password
  const userDb = await db.query.users.findFirst({
    columns: {
      password: true,
    },
    where: eq(users.id, session.id),
  });

  if (!userDb) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Failed to get user data",
      },
      { status: 500 }
    );
  }

  // Compare current password
  const isCorrect = await compare(parsedData.currentPassword, userDb.password);

  if (!isCorrect) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: "Wrong password!",
      },
      { status: 400 }
    );
  }

  // Posthog
  const posthog = PostHogClient();

  try {
    // Hash new password
    const hashedNewPassword = await hash(parsedData.newPassword, 10);
    const updatedAt = new Date();

    // Log to posthog
    posthog.capture({
      distinctId: session.id,
      event: "password changed",
      properties: {
        name: session.name,
        username: session.username,
        nim: session.nim,
        faculty: session.faculty,
        major: session.major,
      },
    });

    // Update password
    await db
      .update(users)
      .set({
        password: hashedNewPassword,
        updatedAt: updatedAt,
      })
      .where(eq(users.id, session.id));

    // Return success
    return NextResponse.json(
      {
        message: "Password successfully changed",
      },
      { status: 200 }
    );
  } catch (error) {
    // Capture to posthog
    const posthog = PostHogClient();
    posthog.capture({
      distinctId: session.id,
      event: "password change failed",
      properties: {
        name: session.name,
        username: session.username,
        nim: session.nim,
        faculty: session.faculty,
        major: session.major,
        error: (error as Error).message,
      },
    });

    // Error response
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Failed to change password",
      },
      { status: 500 }
    );
  }
};
