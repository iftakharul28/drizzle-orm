// drizzle.config.ts
import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/server/schema/*",
  out: "./.drizzle/migrations",
  connectionString: process.env.DATABASE_URL,
} satisfies Config;
