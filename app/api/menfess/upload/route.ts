import { menfess, users } from "@/db/schema";
import db from "@/lib/db";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req:NextRequest)=>{
    const data = await req.json()

    const { userId, content } = data

    try{
        const finduser = await db.select().from(users).where(eq(users.id,userId))

        if (finduser.length==0) {
            return NextResponse.json(
                {
                    error: "User not found",
                },
                { status: 404 }
            );
        }

        if (!content) {
            return NextResponse.json(
                {
                    error: "There is no content",
                },
                { status: 400 }
            ); 
        }

        await db.insert(menfess).values({
            userId:userId,
            content:content
        })

        return NextResponse.json(
            {
                message: "Menfess created succesfully",
            },
            {status:200}
        )

    } catch (error) {
        return NextResponse.json(
            {
                error: "Failed to create menfess",
            },
            {status:500}
        )
    }
}