
// import * as schema from './schema';
import * as dotenv from "dotenv";
import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
dotenv.config();
export const connectionPool = mysql.createPool({
  uri: process.env.DATABASE_URL,
});
export const db = drizzle(connectionPool);

