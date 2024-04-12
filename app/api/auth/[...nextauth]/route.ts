import { authOptions } from "./auth-options";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

declare module "next-auth/jwt" {
  interface JWT {
    id: string; // user id
    username: string; // username
    name: string; // full name
    major: string; // major
    avatar: string | null; // Null when not set, otherwise image url
  }
}

declare module "next-auth" {
  interface Session {
    id: string; // user id
    username: string; // username
    name: string; // full name
    major: string; // major
    avatar: string | null; // Null when not set, otherwise image url
  }
}
