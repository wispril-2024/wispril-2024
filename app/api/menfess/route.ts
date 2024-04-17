import { db } from "@/db/drizzle";
import { menfess } from "@/db/schema";
import PostHogClient from "@/lib/posthog-server";
import { menfessSchema } from "@/lib/zod";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(20, "1 m"),
});

export const POST = async (req: NextRequest) => {
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

  // Get & validate form data
  const formData = await req.formData();
  const rawData = {};
  Object.assign(rawData, { userId: formData.get("userId") });
  Object.assign(rawData, { sender: formData.get("sender") });
  Object.assign(rawData, { message: formData.get("message") });

  // Parse with zod
  const zodResult = menfessSchema.safeParse(rawData);

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

  // Success, get the result
  const parsedData = zodResult.data;

  // Capture posthog
  const posthog = PostHogClient();

  // Insert to database
  try {
    const result = await db
      .insert(menfess)
      .values({
        sender: parsedData.sender,
        message: parsedData.message,
        userId: parsedData.userId, // Target user id
      })
      .returning();

    // Capture posthog
    posthog.capture({
      distinctId: uuid(),
      event: "menfess sent",
      properties: {
        menfessId: result[0].id,
        sender: parsedData.sender,
        message: parsedData.message,
        userId: parsedData.userId,
      },
    });

    // Success response
    return NextResponse.json(
      {
        message: "Menfess succesfully sent",
      },
      { status: 200 }
    );
  } catch (error) {
    // Capture posthog
    posthog.capture({
      distinctId: uuid(),
      event: "menfess failed",
      properties: {
        error: (error as Error).message,
      },
    });

    // Error response
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Failed to send menfess",
      },
      { status: 500 }
    );
  }
};
