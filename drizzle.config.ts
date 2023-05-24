// drizzle.config.ts
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/schema.ts",
  out: "./src/server/migrations",
  connectionString: "mysql://root@localhost:3306/swap-drizzle",
} satisfies Config;
