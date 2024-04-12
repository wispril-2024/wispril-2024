import { menfess } from "@/db/schema";
import db from "@/lib/db";
import { menfessSchema } from "@/lib/zod";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  // Menfess is a public route, no need validate session

  // TO DO: Add rate limiter with redis

  // Get & validate form data
  const formData = await req.formData();
  const rawData = Object.fromEntries(formData.entries());

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

  // Insert to database
  try {
    await db.insert(menfess).values({
      from: parsedData.from,
      message: parsedData.message,
      userId: parsedData.userId, // Target user id
    });

    return NextResponse.json(
      {
        message: "Menfess succesfully sent",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Failed to send menfess",
      },
      { status: 500 }
    );
  }
};
