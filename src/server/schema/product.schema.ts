import { relations } from "drizzle-orm";
import { int, mysqlTable, varchar, mysqlEnum, timestamp } from "drizzle-orm/mysql-core";
import { userSchema } from "./user.schema";

export const productSchema = mysqlTable("product", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  publish: mysqlEnum("publish", ["publish", "draft"]).notNull().default("draft"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const userConfig = relations(userSchema, ({ many }) => ({
  products: many(productSchema),
}));
