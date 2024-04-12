import { sessions, users } from "@/db/schema";
import db from "@/lib/db";
import { profileSchema } from "@/lib/zod";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
  // Validate session
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json(
      {
        error: "Unauthorized Request",
        message: "Sign in to update your profile",
      },
      { status: 401 }
    );
  }

  // Get form data
  const formData = await req.formData();
  const rawData = Object.fromEntries(formData.entries());

  // Parse with zod
  const zodResult = profileSchema.safeParse(rawData);

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
  const updatedAt = new Date();

  try {
    await db
      .update(users)
      .set({
        image: parsedData.image,
        updatedAt: updatedAt,
      })
      .where(eq(sessions.userId, users.id));

    return NextResponse.json(
      {
        message: "Profile succesfully updated",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Failed to create menfess",
      },
      { status: 500 }
    );
  }
};
