import { bigserial, pgTable, text, timestamp } from "drizzle-orm/pg-core";

// Tabela já existe no Supabase — declarada aqui para type-safety
export const waitlist = pgTable("waitlist", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
