import { relations } from "drizzle-orm";
import { int, serial, mysqlTable, varchar, mysqlEnum, timestamp } from "drizzle-orm/mysql-core";
import { userSchema } from "./user.schema";
import { mediaSchema } from "./media.schema";
import { variantsSchema } from "./variants.schema";
import { slugSchema } from "./slug.schema";

export const productSchema = mysqlTable("product", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  publish: mysqlEnum("publish", ["publish", "draft"]).notNull().default("draft"),
  user_id: varchar("user_id", { length: 15 }).references(() => userSchema.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const productRelations = relations(productSchema, ({ one, many }) => ({
  media: many(mediaSchema),
  variants: many(variantsSchema),
}));
