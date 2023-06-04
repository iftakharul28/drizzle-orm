import { int, mysqlTable, varchar, timestamp } from "drizzle-orm/mysql-core";

export const mediaSchema = mysqlTable("media", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  file_name: varchar("file_name", { length: 255 }).notNull(),
  file_size: varchar("file_size", { length: 255 }).notNull().default("0"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
