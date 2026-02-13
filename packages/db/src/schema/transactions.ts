import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { bankrolls } from "./bankrolls";

export const transactions = pgTable("transactions", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  bankrollId: uuid("bankroll_id")
    .notNull()
    .references(() => bankrolls.id, { onDelete: "cascade" }),
  type: text("type").notNull().$type<"deposit" | "withdraw">(),
  amount: numeric("amount", { precision: 12, scale: 2 }).notNull(),
  date: timestamp("date", { withTimezone: true }).defaultNow().notNull(),
  notes: text("notes"),
});
