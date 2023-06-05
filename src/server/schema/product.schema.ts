
import { int,mysqlTable, varchar, mysqlEnum, timestamp } from "drizzle-orm/mysql-core";
import { userSchema } from "./user.schema";
import { relations } from "drizzle-orm";
import { mediaSchema } from "./media.schema";
import { variantsSchema } from "./variants.schema";
import { slugSchema } from "./slug.schema";
import { priceSchema } from "./price.schema";

export const productSchema = mysqlTable("product", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  publish: mysqlEnum("publish", ["publish", "draft"]).notNull().default("draft"),
  userId: varchar("user_id", { length: 15 }).notNull().references(() => userSchema.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const productRelations = relations(productSchema, ({ one, many }) => ({
  url: one(slugSchema, {
		fields: [productSchema.id],
		references: [slugSchema.productId],
	}),
  price: one(priceSchema, {
		fields: [productSchema.id],
		references: [priceSchema.productId],
	}),
  
  media: many(mediaSchema),
  variants: many(variantsSchema)
}));