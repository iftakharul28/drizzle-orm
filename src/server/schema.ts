import { InferModel } from "drizzle-orm";
import { int, mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  Name: varchar("name", { length: 256 }),
  email: varchar("email", { length: 191 }),
  password: varchar("password", { length: 256 }),
});

export type User = InferModel<typeof users, "select">;
export type NewUser = InferModel<typeof users, "insert">;
