import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";

export const bankrolls = pgTable("bankrolls", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  houseName: text("house_name").notNull(),
  initialBalance: numeric("initial_balance", { precision: 12, scale: 2 })
    .notNull()
    .default("0"),
  currentBalance: numeric("current_balance", { precision: 12, scale: 2 })
    .notNull()
    .default("0"),
  currency: text("currency").notNull().default("BRL"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
