import { db } from "@/db/drizzle";
import { taFair } from "@/db/schema";
import { likeTaFairSchema } from "@/lib/zod";
import { eq, sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

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

  try {
    await db
      .update(taFair)
      .set({
        likes: sql`${taFair.likes} + 1`,
      })
      .where(eq(taFair.id, parsedData.taFairId));

    return NextResponse.json(
      {
        message: "Liked updated successfully",
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Failed to update like count",
      },
      { status: 500 }
    );
  }
};
