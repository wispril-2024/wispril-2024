import { db } from "@/db/drizzle";
import { taFair } from "@/db/schema";
import PostHogClient from "@/lib/posthog-server";
import { likeTaFairSchema } from "@/lib/zod";
import { eq, sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export const PUT = async (req: NextRequest) => {
  // Public route, no need to check for authentication

  // TODO: Check rate limitter

  // Validate request body with zod
  const body = await req.json();
  const zodParseResult = likeTaFairSchema.safeParse(body);
  if (!zodParseResult.success) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: zodParseResult.error.errors[0].message,
      },
      { status: 400 }
    );
  }

  // Update like count
  const parsedData = zodParseResult.data;

  // Posthog
  const posthog = PostHogClient();

  try {
    const result = await db
      .update(taFair)
      .set({
        likes: sql`${taFair.likes} + 1`,
      })
      .where(eq(taFair.id, parsedData.taFairId))
      .returning();

    // Capture posthog
    posthog.capture({
      distinctId: uuid(),
      event: "ta fair liked",
      properties: {
        taFairId: parsedData.taFairId,
        taFairUserId: result[0].userId,
      },
    });

    // Success response
    return NextResponse.json(
      {
        message: "Liked updated successfully",
      },
      { status: 200 }
    );
  } catch (e) {
    // Capture posthog
    posthog.capture({
      distinctId: uuid(),
      event: "ta fair like error",
      properties: {
        taFairId: parsedData.taFairId,
        error: (e as Error).message,
      },
    });

    // Error response
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Failed to update like count",
      },
      { status: 500 }
    );
  }
};
