import { relations } from "drizzle-orm";
import { int, mysqlTable, text, mysqlEnum, varchar, timestamp } from "drizzle-orm/mysql-core";
import { mediaSchema } from "./media.schema";
import { productSchema } from "./product.schema";
import { valueSchema } from "./values.schema";
import { priceSchema } from "./price.schema";

export const variantsSchema = mysqlTable("variants", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  stock: varchar("stock", { length: 155 }).notNull(),
  sku: text("sku").notNull(),
  status: mysqlEnum("status", ["in-stock", "out-of-stock", "pre-order"]).notNull().default("out-of-stock"),
  product_id: int("product_id")
    .notNull()
    .references(() => productSchema.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const variantRelations = relations(variantsSchema, ({ one, many }) => ({
  price: one(priceSchema, {
    fields: [variantsSchema.id],
    references: [priceSchema.variant_id],
  }),
  media: many(mediaSchema),
  value: many(valueSchema),
}));
