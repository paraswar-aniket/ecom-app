/**
 * Seed script — populates the products table with 48 diverse items
 * across 6 categories: Electronics, Apparel, Footwear, Home & Kitchen, Books, Sports
 *
 * Can be run standalone via `npm run seed` or called programmatically from db.js
 */

const products = [
  // ── Electronics (8 products) ──────────────────────────────────────
  { name: 'Wireless Noise-Cancelling Headphones', category: 'Electronics', price: 249.99, rating: 4.7, image_url: 'https://picsum.photos/seed/prod1/300/300', description: 'Premium over-ear headphones with active noise cancellation and 30-hour battery life.' },
  { name: 'Mechanical Gaming Keyboard', category: 'Electronics', price: 129.99, rating: 4.5, image_url: 'https://picsum.photos/seed/prod2/300/300', description: 'RGB backlit mechanical keyboard with Cherry MX Blue switches.' },
  { name: '4K Ultra HD Monitor 27"', category: 'Electronics', price: 449.99, rating: 4.8, image_url: 'https://picsum.photos/seed/prod3/300/300', description: '27-inch IPS panel with 144Hz refresh rate and HDR10 support.' },
  { name: 'Portable Bluetooth Speaker', category: 'Electronics', price: 59.99, rating: 4.2, image_url: 'https://picsum.photos/seed/prod4/300/300', description: 'Waterproof portable speaker with 12-hour playtime and deep bass.' },
  { name: 'Wireless Ergonomic Mouse', category: 'Electronics', price: 79.99, rating: 4.4, image_url: 'https://picsum.photos/seed/prod5/300/300', description: 'Ergonomic vertical mouse with adjustable DPI and USB-C charging.' },
  { name: 'Smart Home Hub', category: 'Electronics', price: 149.99, rating: 3.9, image_url: 'https://picsum.photos/seed/prod6/300/300', description: 'Voice-controlled smart home hub compatible with Alexa and Google Home.' },
  { name: 'USB-C Docking Station', category: 'Electronics', price: 189.99, rating: 4.3, image_url: 'https://picsum.photos/seed/prod7/300/300', description: '12-in-1 docking station with dual HDMI, Ethernet, and 100W PD charging.' },
  { name: 'Digital Drawing Tablet', category: 'Electronics', price: 349.99, rating: 4.6, image_url: 'https://picsum.photos/seed/prod8/300/300', description: '13.3-inch pen display tablet with 8192 pressure levels for digital artists.' },

  // ── Apparel (8 products) ──────────────────────────────────────────
  { name: 'Classic Fit Oxford Shirt', category: 'Apparel', price: 49.99, rating: 4.3, image_url: 'https://picsum.photos/seed/prod9/300/300', description: '100% cotton oxford shirt in a relaxed classic fit.' },
  { name: 'Slim Fit Chino Pants', category: 'Apparel', price: 59.99, rating: 4.1, image_url: 'https://picsum.photos/seed/prod10/300/300', description: 'Stretch cotton chinos with a modern slim fit and tapered leg.' },
  { name: 'Merino Wool Sweater', category: 'Apparel', price: 89.99, rating: 4.6, image_url: 'https://picsum.photos/seed/prod11/300/300', description: 'Ultra-soft merino wool crew neck sweater, machine washable.' },
  { name: 'Waterproof Rain Jacket', category: 'Apparel', price: 129.99, rating: 4.4, image_url: 'https://picsum.photos/seed/prod12/300/300', description: 'Lightweight waterproof jacket with sealed seams and packable design.' },
  { name: 'Graphic Print T-Shirt', category: 'Apparel', price: 24.99, rating: 3.8, image_url: 'https://picsum.photos/seed/prod13/300/300', description: 'Soft cotton t-shirt with unique artistic graphic print.' },
  { name: 'Denim Jacket – Vintage Wash', category: 'Apparel', price: 79.99, rating: 4.5, image_url: 'https://picsum.photos/seed/prod14/300/300', description: 'Classic denim jacket in a vintage wash with brass buttons.' },
  { name: 'Performance Polo Shirt', category: 'Apparel', price: 44.99, rating: 4.0, image_url: 'https://picsum.photos/seed/prod15/300/300', description: 'Moisture-wicking polo shirt ideal for golf and outdoor activities.' },
  { name: 'Cashmere Blend Scarf', category: 'Apparel', price: 69.99, rating: 4.7, image_url: 'https://picsum.photos/seed/prod16/300/300', description: 'Luxuriously soft cashmere blend scarf in a timeless plaid pattern.' },

  // ── Footwear (8 products) ─────────────────────────────────────────
  { name: 'Leather Oxford Dress Shoes', category: 'Footwear', price: 159.99, rating: 4.5, image_url: 'https://picsum.photos/seed/prod17/300/300', description: 'Hand-stitched full-grain leather oxford shoes with Goodyear welt.' },
  { name: 'Running Shoes – CloudFoam', category: 'Footwear', price: 119.99, rating: 4.6, image_url: 'https://picsum.photos/seed/prod18/300/300', description: 'Lightweight running shoes with CloudFoam midsole for maximum cushioning.' },
  { name: 'Canvas Slip-On Sneakers', category: 'Footwear', price: 39.99, rating: 4.0, image_url: 'https://picsum.photos/seed/prod19/300/300', description: 'Casual canvas slip-ons with vulcanized rubber sole.' },
  { name: 'Waterproof Hiking Boots', category: 'Footwear', price: 189.99, rating: 4.7, image_url: 'https://picsum.photos/seed/prod20/300/300', description: 'Mid-cut hiking boots with Gore-Tex lining and Vibram outsole.' },
  { name: 'Suede Chelsea Boots', category: 'Footwear', price: 139.99, rating: 4.3, image_url: 'https://picsum.photos/seed/prod21/300/300', description: 'Classic Chelsea boots in premium Italian suede.' },
  { name: 'Athletic Training Shoes', category: 'Footwear', price: 99.99, rating: 4.2, image_url: 'https://picsum.photos/seed/prod22/300/300', description: 'Cross-training shoes with responsive cushioning and stable base.' },
  { name: 'Comfortable Sandals', category: 'Footwear', price: 34.99, rating: 3.9, image_url: 'https://picsum.photos/seed/prod23/300/300', description: 'Contoured footbed sandals with adjustable straps for all-day comfort.' },
  { name: 'High-Top Basketball Shoes', category: 'Footwear', price: 149.99, rating: 4.4, image_url: 'https://picsum.photos/seed/prod24/300/300', description: 'Performance basketball shoes with ankle support and zoom air unit.' },

  // ── Home & Kitchen (8 products) ───────────────────────────────────
  { name: 'Stainless Steel French Press', category: 'Home & Kitchen', price: 34.99, rating: 4.5, image_url: 'https://picsum.photos/seed/prod25/300/300', description: 'Double-wall insulated French press that keeps coffee hot for hours.' },
  { name: 'Cast Iron Dutch Oven 6Qt', category: 'Home & Kitchen', price: 79.99, rating: 4.8, image_url: 'https://picsum.photos/seed/prod26/300/300', description: 'Enameled cast iron Dutch oven perfect for braising and slow cooking.' },
  { name: 'Robot Vacuum Cleaner', category: 'Home & Kitchen', price: 399.99, rating: 4.3, image_url: 'https://picsum.photos/seed/prod27/300/300', description: 'Smart robot vacuum with LiDAR navigation and auto-empty dock.' },
  { name: 'Bamboo Cutting Board Set', category: 'Home & Kitchen', price: 29.99, rating: 4.1, image_url: 'https://picsum.photos/seed/prod28/300/300', description: 'Set of 3 organic bamboo cutting boards with juice grooves.' },
  { name: 'Air Purifier – HEPA Filter', category: 'Home & Kitchen', price: 199.99, rating: 4.6, image_url: 'https://picsum.photos/seed/prod29/300/300', description: 'True HEPA air purifier covering up to 500 sq ft with quiet operation.' },
  { name: 'Ceramic Non-Stick Pan Set', category: 'Home & Kitchen', price: 119.99, rating: 4.4, image_url: 'https://picsum.photos/seed/prod30/300/300', description: '5-piece ceramic coated cookware set, PFOA-free and dishwasher safe.' },
  { name: 'Electric Kettle – Gooseneck', category: 'Home & Kitchen', price: 69.99, rating: 4.7, image_url: 'https://picsum.photos/seed/prod31/300/300', description: 'Variable temperature gooseneck kettle for pour-over coffee enthusiasts.' },
  { name: 'Luxury Bed Sheet Set (Queen)', category: 'Home & Kitchen', price: 89.99, rating: 4.5, image_url: 'https://picsum.photos/seed/prod32/300/300', description: '1000-thread-count Egyptian cotton sheet set with deep pocket fit.' },

  // ── Books (8 products) ────────────────────────────────────────────
  { name: 'Clean Code – Robert C. Martin', category: 'Books', price: 39.99, rating: 4.7, image_url: 'https://picsum.photos/seed/prod33/300/300', description: 'A handbook of agile software craftsmanship for writing readable code.' },
  { name: 'Designing Data-Intensive Applications', category: 'Books', price: 49.99, rating: 4.9, image_url: 'https://picsum.photos/seed/prod34/300/300', description: 'The big ideas behind reliable, scalable, and maintainable data systems.' },
  { name: 'The Pragmatic Programmer', category: 'Books', price: 44.99, rating: 4.8, image_url: 'https://picsum.photos/seed/prod35/300/300', description: 'Your journey to mastery — classic software development wisdom.' },
  { name: 'Atomic Habits – James Clear', category: 'Books', price: 16.99, rating: 4.8, image_url: 'https://picsum.photos/seed/prod36/300/300', description: 'An easy and proven way to build good habits and break bad ones.' },
  { name: 'The Art of War – Sun Tzu', category: 'Books', price: 9.99, rating: 4.3, image_url: 'https://picsum.photos/seed/prod37/300/300', description: 'Ancient military treatise with timeless strategic wisdom.' },
  { name: 'Sapiens – Yuval Noah Harari', category: 'Books', price: 18.99, rating: 4.6, image_url: 'https://picsum.photos/seed/prod38/300/300', description: 'A brief history of humankind from the Stone Age to the Silicon Age.' },
  { name: 'JavaScript: The Good Parts', category: 'Books', price: 29.99, rating: 4.2, image_url: 'https://picsum.photos/seed/prod39/300/300', description: 'Unearthing the beauty in JavaScript by Douglas Crockford.' },
  { name: 'Thinking, Fast and Slow', category: 'Books', price: 14.99, rating: 4.5, image_url: 'https://picsum.photos/seed/prod40/300/300', description: 'Daniel Kahneman explores the two systems that drive how we think.' },

  // ── Sports (8 products) ───────────────────────────────────────────
  { name: 'Yoga Mat – Premium 6mm', category: 'Sports', price: 34.99, rating: 4.4, image_url: 'https://picsum.photos/seed/prod41/300/300', description: 'Non-slip TPE yoga mat with alignment lines and carrying strap.' },
  { name: 'Adjustable Dumbbell Set (50lb)', category: 'Sports', price: 299.99, rating: 4.7, image_url: 'https://picsum.photos/seed/prod42/300/300', description: 'Space-saving adjustable dumbbells from 5 to 50 lbs per hand.' },
  { name: 'Resistance Band Set (5-Pack)', category: 'Sports', price: 24.99, rating: 4.3, image_url: 'https://picsum.photos/seed/prod43/300/300', description: 'Set of 5 latex resistance bands with varying tension levels.' },
  { name: 'Insulated Water Bottle 32oz', category: 'Sports', price: 29.99, rating: 4.6, image_url: 'https://picsum.photos/seed/prod44/300/300', description: 'Double-wall vacuum insulated stainless steel bottle, keeps cold 24hrs.' },
  { name: 'Foam Roller – High Density', category: 'Sports', price: 19.99, rating: 4.1, image_url: 'https://picsum.photos/seed/prod45/300/300', description: 'Firm high-density foam roller for deep tissue massage and recovery.' },
  { name: 'Tennis Racket – Pro Series', category: 'Sports', price: 179.99, rating: 4.5, image_url: 'https://picsum.photos/seed/prod46/300/300', description: 'Graphite composite racket with vibration dampening for control.' },
  { name: 'Cycling Helmet – Aero Fit', category: 'Sports', price: 89.99, rating: 4.4, image_url: 'https://picsum.photos/seed/prod47/300/300', description: 'Lightweight aero road cycling helmet with MIPS protection.' },
  { name: 'Jump Rope – Speed Cable', category: 'Sports', price: 14.99, rating: 4.2, image_url: 'https://picsum.photos/seed/prod48/300/300', description: 'Adjustable speed jump rope with ball bearings for smooth rotation.' },
];

/**
 * Seed the database with product data.
 * @param {import('better-sqlite3').Database} db - The database instance
 */
function seedDatabase(db) {
  const insert = db.prepare(`
    INSERT INTO products (name, category, price, rating, image_url, description)
    VALUES (@name, @category, @price, @rating, @image_url, @description)
  `);

  const insertMany = db.transaction((items) => {
    for (const item of items) {
      insert.run(item);
    }
  });

  insertMany(products);
  console.log(`🌱 Seeded ${products.length} products across 6 categories.`);
}

// Allow running standalone: `node database/seed.js`
if (require.main === module) {
  require('dotenv').config({ path: require('path').resolve(__dirname, '..', '.env') });
  const { db, initDatabase } = require('../config/db');

  // If table doesn't exist, create schema first
  const tableExists = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='products'")
    .get();

  if (!tableExists) {
    const fs = require('fs');
    const path = require('path');
    const schemaPath = path.resolve(__dirname, 'schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf-8');
    db.exec(schemaSql);
    console.log('✅ Schema created.');
  }

  // Clear existing data and re-seed
  db.prepare('DELETE FROM products').run();
  seedDatabase(db);
  db.close();
}

module.exports = { seedDatabase };
