import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema/index.js";

const connectionString = process.env.DATABASE_URL!;

// Supabase connection pooler (Transaction mode) requer prepare: false
const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client, { schema });

export * from "./schema/index.js";
