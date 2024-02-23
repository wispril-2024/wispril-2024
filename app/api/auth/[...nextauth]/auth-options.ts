import { db } from "../../../../db/drizzle";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import type { NextAuthOptions, AuthOptions } from "next-auth";
import "server-only";

type Adapter = NextAuthOptions["adapter"];

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [],
  session: {
    strategy: "jwt",
    maxAge: 86400,
  },
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
    // newUser: "/auth/register",
    // signOut: "/auth/sign-out",
  },
};
