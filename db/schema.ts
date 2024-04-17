import { faculties, majors } from "@/lib/faculty-major";
import type { AdapterAccount } from "@auth/core/adapters";
import { relations } from "drizzle-orm";
import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  numeric,
  pgEnum,
  uuid,
} from "drizzle-orm/pg-core";

export const facultyEnum = pgEnum("faculty", faculties);

export const majorEnum = pgEnum("major", majors);

export const users = pgTable("user", {
  // Template nextauth adapter
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email"),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
  // Additional
  username: text("username").unique().notNull(),
  password: text("password").notNull(),
  nim: numeric("nim").notNull(),
  major: majorEnum("major").notNull(),
  faculty: facultyEnum("faculty").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
});

export const accounts = pgTable(
  "account",
  {
    userId: uuid("userId")
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
  userId: uuid("userId")
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
  id: uuid("id").defaultRandom().primaryKey(),
  sender: text("sender"),
  message: text("message").notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  userId: uuid("userId")
    .notNull()
    .references(() => users.id),
});

export const taFair = pgTable("taFair", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("userId")
    .references(() => users.id)
    .notNull()
    .unique(),
  title: text("title").notNull(),
  // story: text("story").notNull(),
  abstract: text("abstract").notNull(),
  link: text("link"), // Null if link is not yet published
  likes: integer("likes").notNull().default(0),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
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
