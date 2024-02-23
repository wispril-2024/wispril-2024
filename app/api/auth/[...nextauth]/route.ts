import { authOptions } from "./auth-options";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// declare module "next-auth/jwt" {
//   interface JWT {
//     id: string;
//     email: string;
//     username: string | null;
//     name: string | null;
//     image: string | null;
//   }
// }

// declare module "next-auth" {
//   interface Session {
//     id: string;
//     email: string;
//     username: string | null;
//     name: string | null;
//     image: string | null;
//   }
// }
