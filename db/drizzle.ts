import * as schema from "./schema";
import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

const sql = neon<boolean, boolean>(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
