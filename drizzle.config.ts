import { loadEnvConfig } from "@next/env";
import type { Config } from "drizzle-kit";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
    ssl: true,
  },
} satisfies Config;
