import { mysqlTable, varchar, mysqlEnum, timestamp, bigint, boolean } from "drizzle-orm/mysql-core";

export const userSchema = mysqlTable("auth_user", {
  id: varchar("id", { length: 15 }).primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  role: mysqlEnum("role", ["admin", "user"]).notNull().default("user"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
export const sessionSchema = mysqlTable("auth_session", {
  id: varchar("id", { length: 128 }).primaryKey(),
  userId: varchar("user_id", { length: 15 })
    .notNull()
    .references(() => userSchema.id),
  activeExpires: bigint("active_expires", { mode: "number" }).notNull(),
  idleExpires: bigint("idle_expires", { mode: "number" }).notNull(),
});
export const keySchema = mysqlTable("auth_key", {
  id: varchar("id", { length: 255 }).primaryKey(),
  userId: varchar("user_id", { length: 15 })
    .notNull()
    .references(() => userSchema.id),
  primaryKey: boolean("primary_key").notNull(),
  hashedPassword: varchar("hashed_password", { length: 255 }),
  expires: bigint("expires", { mode: "number" }),
});
