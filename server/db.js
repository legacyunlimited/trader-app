const sqlite3 = require('sqlite3').verbose();

// Create a database connection
const db = new sqlite3.Database('./stocks.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

// Create the Items table if it doesn't exist
db.run(
  'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, symbol TEXT, companyName TEXT, latestPrice REAL)',
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Items table created successfully.');
  }
);

module.exports = db;