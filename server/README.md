# E-Commerce Backend API

REST API server for the e-commerce multi-filter product marketplace, built with **Node.js**, **Express**, and **SQLite**.

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Runtime | Node.js (v18+) | Server-side JavaScript |
| Framework | Express.js | REST API routing & middleware |
| Database | SQLite 3 | Lightweight relational storage |
| ORM | better-sqlite3 | Synchronous, fast SQLite bindings |
| Validation | express-validator | Request query-param validation |
| CORS | cors middleware | Cross-origin request handling |

---

## Getting Started

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
DB_PATH=./database/store.db
```

### 3. Run the Server

```bash
# Development (auto-restart on changes)
npm run dev

# Production
npm start
```

The database is **auto-initialised** on first startup — schema creation and seeding happen automatically if the `products` table doesn't exist.

### 4. Seed / Reset Data

```bash
npm run seed
```

This clears existing products and re-seeds 48 items across 6 categories.

---

## Project Structure

```
server/
├── index.js                 # Entry point — Express server setup
├── config/
│   └── db.js                # SQLite connection singleton + auto-init
├── database/
│   ├── schema.sql           # CREATE TABLE + indexes
│   └── seed.js              # 48 products across 6 categories
├── routes/
│   └── products.js          # Express Router — GET /api/products
├── controllers/
│   └── productController.js # Validation chain + request handler
├── services/
│   └── filterService.js     # Dynamic SQL query builder (core logic)
├── middleware/
│   └── errorHandler.js      # Centralised error handler
├── .env                     # Environment config (not committed)
└── package.json
```

---

## API Reference

### `GET /api/products`

Returns filtered, sorted products.

#### Query Parameters

| Parameter | Type | Default | Example | Description |
|-----------|------|---------|---------|-------------|
| `categories` | string | _(all)_ | `Electronics,Apparel` | Comma-separated category names |
| `minPrice` | number | `0` | `100` | Minimum price (inclusive) |
| `maxPrice` | number | `999999` | `500` | Maximum price (inclusive) |
| `minRating` | number | `1` | `4` | Minimum star rating (1–5) |
| `sortBy` | string | `default` | `price_asc` | Sort order |

#### Supported `sortBy` Values

| Value | Description |
|-------|-------------|
| `default` | Default order (by ID) |
| `price_asc` | Price: Low → High |
| `price_desc` | Price: High → Low |
| `rating_desc` | Top Rated First |

#### Valid Categories

`Electronics` · `Apparel` · `Footwear` · `Home & Kitchen` · `Books` · `Sports`

#### Success Response (200)

```json
{
  "success": true,
  "count": 12,
  "products": [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "category": "Electronics",
      "price": 79.99,
      "rating": 4.5,
      "image_url": "https://picsum.photos/seed/prod1/300/300",
      "description": "Noise-cancelling over-ear headphones"
    }
  ],
  "appliedFilters": {
    "categories": ["Electronics"],
    "minPrice": 0,
    "maxPrice": 999999,
    "minRating": 1,
    "sortBy": "default"
  }
}
```

#### Error Response (400)

```json
{
  "success": false,
  "errors": [
    { "param": "minPrice", "msg": "minPrice must be a non-negative number" }
  ]
}
```

---

## Example Requests

```bash
# All products
GET /api/products

# Electronics and Books only
GET /api/products?categories=Electronics,Books

# Price range $50–$200, sorted cheapest first
GET /api/products?minPrice=50&maxPrice=200&sortBy=price_asc

# Top-rated Electronics under $500
GET /api/products?categories=Electronics&maxPrice=500&minRating=4&sortBy=rating_desc
```

---

## Seed Data

48 products across 6 categories:

| Category | Count | Price Range |
|----------|-------|-------------|
| Electronics | 8 | $59.99 – $449.99 |
| Apparel | 8 | $24.99 – $129.99 |
| Footwear | 8 | $34.99 – $189.99 |
| Home & Kitchen | 8 | $29.99 – $399.99 |
| Books | 8 | $9.99 – $49.99 |
| Sports | 8 | $14.99 – $299.99 |

---

## Architecture

```
Request → CORS → JSON Parser → Router → Validation → Controller → filterService → SQLite
                                                                                    ↓
                                                                     errorHandler (500s)
```

- **filterService.js** dynamically builds parameterised SQL queries
- **Combinatorial intersect filtering** — all active filters are AND-ed together
- **Graceful null handling** — cleared filters return the full inventory
- **Database-level filtering** using indexes for performance
