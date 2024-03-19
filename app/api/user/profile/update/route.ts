import { users } from "@/db/schema";
import db from "@/lib/db";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req:NextRequest)=>{
    const data = await req.json()
    
    const { 
        id, 
        name, 
        username,
        nim,
        jurusan, 
        fakultas, 
        email,
        image,
    } = data

    try{
        const finduser = await db.select().from(users).where(eq(users.id,id))
        if (finduser.length==0) {
            return NextResponse.json(
                {
                    error: "User not found",
                },
                { status: 404 }
            );
        }

        const updatedAt = new Date()

        await db
            .update(users)
            .set({
                name:name,
                username:username,
                nim:nim,
                jurusan:jurusan,
                fakultas:fakultas,
                email:email,
                image:image,
                updatedAt:updatedAt
            })
            .where(eq(users.id,id))

        return NextResponse.json(
            {
                message: "Update succesful",
            },
            {status:200}
        )

    } catch(error){
        return NextResponse.json(
            {
                error: "Failed to update",
            },
            {status:500}
        )
    }
}