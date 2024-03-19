import { NextResponse } from "next/server";

// GET request
export const GET = () => {
  return NextResponse.json({ message: "sukses" }, { status: 200 });
};
