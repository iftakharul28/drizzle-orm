
import { relations } from "drizzle-orm";
import { int,mysqlTable, varchar, timestamp } from "drizzle-orm/mysql-core";
import { mediaSchema } from "./media.schema";

export const variantsSchema = mysqlTable("variants", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const productRelations = relations(variantsSchema, ({ many }) => ({
    media: many(mediaSchema),
  }));