import lucia from "lucia-auth";
import { nextjs } from "lucia-auth/middleware";
import { mysql2 } from "@lucia-auth/adapter-mysql";
import { connectionPool } from "@/server";
const auth = lucia({
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
  export type Auth = typeof auth;

  export default auth 