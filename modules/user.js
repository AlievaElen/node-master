const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test.db");
const sql =
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL, password TEXT NOT NULL, age INTEGER NOT NULL)";

db.run(sql);
class User {
  constructor() {}
  static create(dataForm) {}

  static findByEmail(email) {}
}
