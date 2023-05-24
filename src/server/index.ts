import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const connection = await mysql.createConnection({
  host: process.env["DATABASE_HOST"],
  user: process.env["DATABASE_USER"],
  database: process.env["DATABASE_NAME"],
  //port: process.env["DATABASE_PORT"],
});
export const db = drizzle(connection, { schema });