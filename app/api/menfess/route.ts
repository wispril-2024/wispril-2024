import { menfess } from "@/db/schema";
import db from "@/lib/db";
import { menfessSchema } from "@/lib/zod";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const userId = formData.get("userId");
  const content = formData.get("content");

  const zodResult = menfessSchema.safeParse({ userId, content });

  if (!zodResult.success) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: zodResult.error.issues[0].message,
      },
      { status: 400 }
    );
  }

  const result = zodResult.data;

  try {
    await db.insert(menfess).values({
      userId: result.userId,
      content: result.content,
    });

    return NextResponse.json(
      {
        message: "Menfess succesfully created",
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
