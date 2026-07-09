const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Resolve DB path from env or default
const dbPath = path.resolve(__dirname, '..', process.env.DB_PATH || './database/store.db');

// Ensure the database directory exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Create the database connection singleton
const db = new Database(dbPath);

// Enable WAL mode for better concurrent read performance
db.pragma('journal_mode = WAL');

/**
 * Initialise the database: create tables and seed data if the
 * products table doesn't exist yet.
 */
function initDatabase() {
  // Check if the products table already exists
  const tableExists = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='products'")
    .get();

  if (!tableExists) {
    console.log('📦 First run detected — creating schema and seeding data...');

    // Read and execute the schema SQL
    const schemaPath = path.resolve(__dirname, '..', 'database', 'schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf-8');
    db.exec(schemaSql);
    console.log('✅ Schema created successfully.');

    // Run the seed script
    const { seedDatabase } = require('../database/seed');
    seedDatabase(db);
    console.log('✅ Database seeded successfully.');
  } else {
    console.log('📦 Database already initialised — skipping schema/seed.');
  }
}

module.exports = { db, initDatabase };
