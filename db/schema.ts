import type { AdapterAccount } from "@auth/core/adapters";
import { relations, sql } from "drizzle-orm";
import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  numeric,
  pgEnum,
} from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";

export const Fakultas = pgEnum("fakultas", [
  "FITB",
  "FMIPA",
  "FSRD",
  "FTI",
  "FTMD",
  "FTTM",
  "FTSL",
  "SAPPK",
  "SBM",
  "SF",
  "SITH",
  "STEI",
]);

export const Jurusan = pgEnum("jurusan", [
  "Meteorologi",
  "Oseanografi",
  "Teknik Geodesi dan Geomatika",
  "Teknik Geologi",
  "Aktuaria",
  "Astronomi",
  "Fisika",
  "Kimia",
  "Matematika",
  "Desain Interior",
  "Desain Komunikasi Visual",
  "Desain Produk",
  "Kriya",
  "Seni Rupa",
  "Teknik Dirgantara",
  "Teknik Material",
  "Teknik Mesin",
  "Teknik Geofisika",
  "Teknik Metalurgi",
  "Teknik Perminyakan",
  "Teknik Pertambangan",
  "Rekayasa Infrastruktur Lingkungan",
  "Teknik dan Pengelolaan Sumber Daya Air",
  "Teknik Kelautan",
  "Teknik Lingkungan",
  "Teknik Sipil",
  "Manajemen Rekayasa Industri",
  "Teknik Bioenergi dan Kemurgi",
  "Teknik Fisika",
  "Teknik Industri",
  "Teknik Kimia",
  "Teknik Pangan",
  "Arsitektur",
  "Perencanaan Wilayah dan Kota",
  "Kewirausahaan",
  "Manajemen",
  "Farmasi Klinik dan Komunitas",
  "Sains dan Teknologi Farmasi",
  "Biologi",
  "Mikrobiologi",
  "Rekayasa Hayati",
  "Rekayasa Pertanian",
  "Rekayasa Kehutanan",
  "Teknologi Pascapanen",
  "Sistem dan Teknologi Informasi",
  "Teknik Biomedis",
  "Teknik Elektro",
  "Informatika",
  "Teknik Telekomunikasi",
  "Teknik Tenaga Listrik",
]);

export const users = pgTable("user", {
  id: text("id")
    .$defaultFn(() => uuidv4())
    .primaryKey(),
  name: text("name"),
  username: text("username").unique(),
  password: text("password"),
  nim: numeric("NIM"),
  jurusan: Jurusan("jurusan"),
  fakultas: Fakultas("fakultas"),
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
  userId: text("userId").references(() => users.id),
});

export const taFair = pgTable("taFair", {
  id: text("id")
    .$defaultFn(() => uuidv4())
    .primaryKey(),
  userId: text("userId")
    .references(() => users.id)
    .unique(),
  title: text("title"),
  content: text("content"),
  link: text("link"),
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
