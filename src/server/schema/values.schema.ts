import { int, mysqlTable, json, varchar, timestamp } from "drizzle-orm/mysql-core";
import { variantsSchema } from "./variants.schema";

export const valueSchema = mysqlTable("value", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  attribute_data: json("attribute_data"),
  variant_id: int("variant_id").references(() => variantsSchema.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
