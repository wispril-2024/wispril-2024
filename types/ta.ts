import { type UserPublic } from "./user";
import { taFair } from "@/db/schema";

export type TugasAkhir = Omit<
  typeof taFair.$inferSelect,
  "createdAt" | "userId"
> & {
  user: Pick<UserPublic, "name" | "id" | "nim" | "major" | "faculty">;
};
