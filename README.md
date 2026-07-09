# ShopVibe — E-Commerce Multi-Filter Marketplace

Full-stack e-commerce product browsing interface with a **sticky multi-filter sidebar** and **dynamic product grid** that updates instantly without full page reloads.

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 18, Vite, Vanilla CSS | Component-based SPA with dark mode glassmorphism |
| **Backend** | Node.js, Express.js | REST API with input validation |
| **Database** | SQLite (better-sqlite3) | Lightweight relational storage with indexes |
| **HTTP** | Axios | API communication with AbortController |

---

## Quick Start

### 1. Backend

```bash
cd server
npm install
npm run dev
```

Server starts on `http://localhost:5000`. Database auto-initialises with 48 products on first run.

### 2. Frontend

```bash
cd client
npm install
npm run dev
```

Vite dev server starts on `http://localhost:5173` with API proxy to port 5000.

---

## Features

- **Category Filter** — 6 categories with animated checkboxes
- **Price Range** — Dual-thumb slider ($0–$2,000)
- **Star Rating** — Radio buttons (1★–5★)
- **Sort By** — Default / Price Low→High / Price High→Low / Top Rated
- **Combinatorial Filtering** — All filters AND-ed together server-side
- **Instant Updates** — Debounced API calls with AbortController
- **Empty State** — "No items match" with Reset button
- **Loading Skeletons** — Shimmer animation on initial load
- **Dark Mode** — Glassmorphism design with micro-animations
- **Responsive** — Desktop sidebar → mobile drawer overlay
- **Accessible** — ARIA labels, keyboard navigation, semantic HTML

---

## Project Structure

```
ecom-app/
├── server/                 # Express REST API (see server/README.md)
│   ├── config/db.js        # SQLite connection singleton
│   ├── database/           # Schema + seed data (48 products)
│   ├── routes/             # GET /api/products
│   ├── controllers/        # Input validation + handler
│   ├── services/           # Dynamic SQL query builder
│   └── middleware/          # Error handler
│
├── client/                 # React SPA (see client/README.md)
│   ├── src/api/            # Axios instance
│   ├── src/hooks/          # useProducts custom hook
│   └── src/components/     # Sidebar, ProductGrid, common
│
└── README.md               # This file
```

---

## API Reference

### `GET /api/products`

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `categories` | string | _(all)_ | Comma-separated: `Electronics,Apparel` |
| `minPrice` | number | `0` | Minimum price (inclusive) |
| `maxPrice` | number | `999999` | Maximum price (inclusive) |
| `minRating` | number | `1` | Minimum star rating (1–5) |
| `sortBy` | string | `default` | `price_asc`, `price_desc`, `rating_desc` |

---

## Architecture

```
User → React Filter Controls → useProducts Hook → Axios → Express API → SQLite
                                                                          ↓
                                                              Filtered Products
                                                                          ↓
                                                    React ProductGrid re-renders
```

All filtering, sorting, and search logic runs on the **backend**. The frontend is purely presentational — it sends filter state to the API and renders whatever comes back.
