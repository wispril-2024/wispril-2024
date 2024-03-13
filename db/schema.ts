import type { AdapterAccount } from "@auth/core/adapters";
import { relations } from "drizzle-orm";
import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
} from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";

export const users = pgTable("user", {
  id: text("id")
    .$defaultFn(() => uuidv4())
    .primaryKey(),
  name: text("name"),
  username: text("username").unique(),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

export const menfess = pgTable("menfess", {
  id: text("id")
    .$defaultFn(() => uuidv4())
    .primaryKey(),
  content: text("content"),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
  userId: text("userID"),
});

export const taFair = pgTable("taFair", {
  id: text("id")
    .$defaultFn(() => uuidv4())
    .primaryKey(),
  userId: text("userId")
    .references(() => users.id)
    .unique(),
  content: text("content").notNull(),
  likes: integer("likes").default(0),
  createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
});

export const usersRelations = relations(users, ({ one, many }) => ({
  taFair: one(taFair),
  menfess: many(menfess),
}));

export const taFairRelations = relations(taFair, ({ one }) => ({
  user: one(users, {
    fields: [taFair.userId],
    references: [users.id],
  }),
}));

export const menfessRelations = relations(menfess, ({ one }) => ({
  user: one(users, {
    fields: [menfess.userId],
    references: [users.id],
  }),
}));
