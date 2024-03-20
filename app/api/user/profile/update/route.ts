import { users } from "@/db/schema";
import db from "@/lib/db";
import { profileupdateschema } from "@/lib/zod";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
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

  const formData = await req.formData();
  const imageUrl = formData.get("imageUrl");
  const zodResult = profileupdateschema.safeParse(imageUrl);

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
  const updatedAt = new Date();

  try{
    await db.update(users)
      .set({
        image:result,
        updatedAt:updatedAt
      })
      .where(eq(session.userId,users.id))

    return NextResponse.json(
      {
        message : "Profile succesfully updated"
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
