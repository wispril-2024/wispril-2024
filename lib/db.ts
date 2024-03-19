import { PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const url = process.env.DATABASE_URL;

if (!url) {
  throw new Error("Error");
}

const client = postgres(url);
const db: PostgresJsDatabase = drizzle(client);

export default db;
