import { avatarSchema } from "@/lib/zod";
import { type UploadApiOptions, v2 as cloudinary } from "cloudinary";
import { getServerSession } from "next-auth";
import { type NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  // Validate session
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json(
      {
        error: "Unauthorized Request",
        message: "Sign in to upload new avatar",
      },
      { status: 401 }
    );
  }

  // Validate file
  const formData = await req.formData();
  const rawFile = formData.get("file");
  const zodResult = avatarSchema.safeParse(rawFile);
  if (!zodResult.success) {
    return NextResponse.json(
      {
        error: "Bad Request",
        message: zodResult.error.issues[0].message,
      },
      { status: 400 }
    );
  }
  const file = zodResult.data;

  // Cloudinary Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  // Options
  const folderName = "avatar";
  // TO DO: bind with username
  const fileName = `username`;
  const options: UploadApiOptions = {
    folder: folderName,
    public_id: fileName,
    overwrite: true,
  };

  // Cloudinary accepts base64 url
  // Convert blob to base64
  const buffer = Buffer.from(await file.arrayBuffer());
  const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

  // Upload image
  try {
    const result = await cloudinary.uploader.upload(base64, options);
    // Success (secure_url uses https)
    return NextResponse.json(
      {
        avatar_url: result.secure_url,
      },
      { status: 200 }
    );
  } catch (error) {
    // Error
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: "Failed to upload avatar",
      },
      { status: 500 }
    );
  }
};
