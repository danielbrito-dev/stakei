import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { users } from "./users";
import { bankrolls } from "./bankrolls";

export const bets = pgTable("bets", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  bankrollId: uuid("bankroll_id")
    .notNull()
    .references(() => bankrolls.id, { onDelete: "cascade" }),
  type: text("type").notNull().$type<"single" | "parlay">(),
  stake: numeric("stake", { precision: 12, scale: 2 }).notNull(),
  potentialReturn: numeric("potential_return", { precision: 12, scale: 2 }),
  oddsTotal: numeric("odds_total", { precision: 8, scale: 3 }).notNull(),
  status: text("status")
    .notNull()
    .$type<"pending" | "won" | "lost" | "void" | "cashout">()
    .default("pending"),
  placedAt: timestamp("placed_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  settledAt: timestamp("settled_at", { withTimezone: true }),
});

export const betLegs = pgTable("bet_legs", {
  id: uuid("id").defaultRandom().primaryKey(),
  betId: uuid("bet_id")
    .notNull()
    .references(() => bets.id, { onDelete: "cascade" }),
  eventName: text("event_name").notNull(),
  sport: text("sport").notNull(),
  league: text("league"),
  market: text("market").notNull(),
  selection: text("selection").notNull(),
  odds: numeric("odds", { precision: 8, scale: 3 }).notNull(),
  status: text("status")
    .notNull()
    .$type<"pending" | "won" | "lost" | "void">()
    .default("pending"),
  settledAt: timestamp("settled_at", { withTimezone: true }),
});
