import { db } from "@/db/drizzle";
import { sessions, users } from "@/db/schema";
import { passwordschema } from "@/lib/zod";
import { compare, hash } from "bcrypt";
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
    const currentPassword = formData.get("currentPassword");
    const newPassword = formData.get("newPassword");

    const zodResult = passwordschema.safeParse({currentPassword,newPassword})

    if (!zodResult.success) {
        return NextResponse.json(
            {
                error: "Bad Request",
                message: zodResult.error.issues[0].message,
            },
            { status: 400 }
        );
    }

    const userFound = await db.query.users.findFirst({
        where:eq(sessions.userId,users.id)
    })

    if (!userFound || !userFound.password) {
        return NextResponse.json(
            {
            error: "Not Found",
            message: "User not found",
            },
            { status: 404 }
        );
    }

    if (typeof currentPassword === 'string' && typeof userFound.password === 'string' && typeof newPassword === 'string') {
        const passwordCheck = await compare(currentPassword, userFound.password);

        if (!passwordCheck) {
            return NextResponse.json(
                {
                error: "Bad Request",
                message: "Password does not match",
                },
                { status: 400 }
            );
        }

        try {
            const hashedNewPassword = await hash(newPassword,10)
            const updatedAt = new Date()

            await db.update(users).set({
                password:hashedNewPassword,
                updatedAt:updatedAt
            })
            
        } catch (error) {
            return NextResponse.json(
                {
                  error: "Internal Server Error",
                  message: "Failed to change password",
                },
                { status: 500 }
            );
        }
        
    } else {
        return NextResponse.json(
            {
                error: "Bad Request",
                message: "Wrong type password",
            },
            { status: 400 }
        );
    }

}