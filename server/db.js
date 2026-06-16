const { DatabaseSync } = require('node:sqlite');
const path = require('path');

const db = new DatabaseSync(path.join(__dirname, 'nia.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS members (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    city TEXT,
    membership_type TEXT DEFAULT 'individual',
    interests TEXT,
    how_heard TEXT,
    message TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

module.exports = db;
