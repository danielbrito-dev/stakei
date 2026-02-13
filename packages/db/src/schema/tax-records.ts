import {
  integer,
  numeric,
  pgTable,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import { users } from "./users.js";

export const taxRecords = pgTable("tax_records", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  year: integer("year").notNull(),
  month: integer("month").notNull(),
  grossProfit: numeric("gross_profit", { precision: 12, scale: 2 })
    .notNull()
    .default("0"),
  losses: numeric("losses", { precision: 12, scale: 2 })
    .notNull()
    .default("0"),
  netProfit: numeric("net_profit", { precision: 12, scale: 2 })
    .notNull()
    .default("0"),
  taxDue: numeric("tax_due", { precision: 12, scale: 2 })
    .notNull()
    .default("0"),
  exemptAmount: numeric("exempt_amount", { precision: 12, scale: 2 })
    .notNull()
    .default("0"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
