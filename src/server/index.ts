import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import lucia from "lucia-auth";
import { mysql2 } from "@lucia-auth/adapter-mysql";
import * as schema from "./schema";
import * as dotenv from "dotenv";
import { nextjs } from "lucia-auth/middleware";
dotenv.config();
const connectionPool = mysql.createPool({
  uri: process.env.DATABASE_URL,
  // uri: "mysql://root@localhost:3306/swap-drizzle",
});
export const auth = lucia({
  adapter: mysql2(connectionPool),
  env: process.env.NODE_ENV !== "production" ? "DEV" : "PROD",
  middleware: nextjs(),
  transformDatabaseUser: (userData) => {
    return {
      userId: userData.id,
      name: userData.name,
      email: userData.email,
    };
  },
  sessionExpiresIn: {
    activePeriod: 1000 * 60 * 60 * 24 * 30, // 1 month
    idlePeriod: 0, // disable session renewal
  },
});
export const db = drizzle(connectionPool, { schema });
