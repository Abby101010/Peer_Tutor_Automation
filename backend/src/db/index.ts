// Drizzle ORM + SQLite client (local).
import 'dotenv/config';
import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const dbUrl = process.env.DATABASE_URL ?? './data/app.db';
const sqlite = new Database(dbUrl);
export const db = drizzle(sqlite);
