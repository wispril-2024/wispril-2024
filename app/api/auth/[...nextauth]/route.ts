import { authOptions } from "./auth-options";
import { users } from "@/db/schema";
import { User } from "lucide-react";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

type UserDB = typeof users.$inferSelect;
type UserSession = Omit<
  UserDB,
  "updatedAt" | "createdAt" | "email" | "emailVerified" | "password"
>;

declare module "next-auth/jwt" {
  interface JWT extends UserSession, UserSession {}
}

declare module "next-auth" {
  interface Session extends UserSession {}

  interface User extends UserDB {}
}
