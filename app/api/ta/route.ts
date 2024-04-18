import { db } from "@/db/drizzle";
import { taFair } from "@/db/schema";
import PostHogClient from "@/lib/posthog-server";
import { likeTaFairSchema } from "@/lib/zod";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(35, "1 m"),
});

export const PUT = async (req: NextRequest) => {
  // Rate limiter with redis
  const ip = req.ip || "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  // Too many requests
  if (!success) {
    return NextResponse.json(
      {
        error: "Too Many Request",
        message: `Rate limit exceeded, please try again in 60 seconds`,
      },
      { status: 429 }
    );
  }

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

    // Revalidate path
    revalidatePath("/ta-fair", "page");
    revalidatePath("/ta-fair/[id]", "page");

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
