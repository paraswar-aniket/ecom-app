# ShopVibe — Frontend Client

React SPA for the e-commerce multi-filter product marketplace, built with **React 18**, **Vite**, and **Vanilla CSS**.

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Build Tool | Vite | Fast dev server with HMR |
| UI Library | React 18+ | Component-based UI with hooks |
| HTTP Client | Axios | API calls to Express backend |
| Icons | react-icons | Star icons, UI embellishments |
| Styling | Vanilla CSS | Custom design system, CSS variables |
| Fonts | Google Fonts (Inter) | Modern, clean typography |

---

## Getting Started

### 1. Install Dependencies

```bash
cd client
npm install
```

### 2. Start Dev Server

```bash
npm run dev
```

The Vite dev server starts on `http://localhost:5173` with the `/api` proxy configured to forward requests to the Express backend on port 5000.

> **Note:** Make sure the backend server is running on port 5000 before starting the frontend.

---

## Architecture

```
App.jsx
├── useProducts() hook ──── manages all filter state + API calls
│   ├── categories[]        selected category names
│   ├── priceRange{min,max} price bounds
│   ├── minRating           minimum star rating
│   ├── sortBy              sort order key
│   ├── products[]          fetched product list
│   ├── loading / error     request state
│   └── resetFilters()      resets all filters
│
├── Sidebar (aside)         filter controls (coming soon)
└── ProductGrid (main)      product cards (coming soon)
```

### API Layer (`productApi.js`)

- Axios instance with `baseURL: '/api'` (proxied to Express)
- `fetchProducts(params, signal)` — builds query string, supports AbortController
- Handles: `categories`, `minPrice`, `maxPrice`, `minRating`, `sortBy`

### Custom Hook (`useProducts.js`)

- Reactive `useEffect` watches all filter state
- **300ms debounce** to avoid API spam during slider drags
- **AbortController** cancels in-flight requests on rapid filter changes
- `resetFilters()` resets everything to defaults

---

## Design System

| Token | Value | Purpose |
|-------|-------|---------|
| `--bg-primary` | `#0f0f1a` | Deep dark background |
| `--bg-secondary` | `#1a1a2e` | Card / sidebar background |
| `--accent` | `#6c63ff` | Primary accent — vibrant purple |
| `--price-color` | `#00d4aa` | Teal green for prices |
| `--star-color` | `#ffc107` | Gold for star ratings |

---

## Current Status

- ✅ Vite + React scaffolding with proxy
- ✅ Full CSS design system (tokens, reset, scrollbar, layout)
- ✅ Two-column layout skeleton (aside + main)
- ✅ API layer with Axios + AbortController
- ✅ useProducts custom hook with debouncing
- ✅ Products fetched on mount (48 products verified)
- 🔲 Product grid & cards
- 🔲 Sidebar filter controls
- 🔲 Sort, reset, empty state
- 🔲 Loading skeletons & animations
