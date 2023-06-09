import { int, mysqlTable, timestamp } from "drizzle-orm/mysql-core";
import { variantsSchema } from "./variants.schema";

export const priceSchema = mysqlTable("price", {
  id: int("id").autoincrement().primaryKey(),
  price: int("price").default(0).notNull(),
  salePrice: int("sale_price").default(0),
  variant_id: int("variant_id").references(() => variantsSchema.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
