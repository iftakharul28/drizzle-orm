
import { int,mysqlTable, varchar, timestamp } from "drizzle-orm/mysql-core";
import { productSchema } from "./product.schema";

export const slugSchema = mysqlTable("slug", {
  id: int("id").autoincrement().primaryKey(),
  slug: varchar("name", { length: 255 }).notNull(),
  productId: int("product_id").notNull().references(() => productSchema.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});