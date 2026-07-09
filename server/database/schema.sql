-- Products table
CREATE TABLE IF NOT EXISTS products (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  name        TEXT    NOT NULL,
  category    TEXT    NOT NULL,
  price       REAL    NOT NULL CHECK(price > 0),
  rating      REAL    NOT NULL CHECK(rating >= 1 AND rating <= 5),
  image_url   TEXT    NOT NULL,
  description TEXT    DEFAULT '',
  created_at  DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for fast filtering
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_price    ON products(price);
CREATE INDEX IF NOT EXISTS idx_products_rating   ON products(rating);
