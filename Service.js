import Database from "better-sqlite3";

const db = new Database("db/database.db");
console.log(db.prepare("SELECT * FROM users").all());