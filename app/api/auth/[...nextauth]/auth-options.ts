import { db } from "../../../../db/drizzle";
import { users } from "@/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { compare } from "bcrypt";
import { eq } from "drizzle-orm";
import type { NextAuthOptions, AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import "server-only";

type Adapter = NextAuthOptions["adapter"];

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) {
          console.log("Missing credentials");
          return null;
        }

        const existingUser = await db.query.users.findFirst({
          where: eq(users.username, credentials.username),
        });

        if (!existingUser || !existingUser.password) {
          console.log(`User not found for username: ${credentials.username}`);
          return null;
        }

        const passwordCheck = await compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordCheck) {
          console.log("Password check failed.");
          return null;
        }

        return {
          id: `${existingUser.id}`,
          name: existingUser.username || "",
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 86400,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          name: user.name,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
        },
      };
    },
  },
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
    // newUser: "/auth/register",
    // signOut: "/auth/sign-out",
  },
};
