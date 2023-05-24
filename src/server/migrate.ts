import { migrate } from "drizzle-orm/mysql2/migrator";
import { db } from "./";
import * as schema from "./schema";

// @ts-ignore
migrate(db, { schema, migrationsFolder: "src/server/migrations" });
