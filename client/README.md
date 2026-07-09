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
└── ProductGrid (main)
    ├── ProductCard          image, name, price, rating, category badge
    └── StarRating           reusable filled/half/empty star display
```

### Components

| Component | Purpose |
|-----------|---------|
| `ProductGrid` | CSS Grid container with auto-fill responsive columns |
| `ProductCard` | Glassmorphism card with hover lift, image zoom, gradient category badge |
| `StarRating` | Full/half/empty star icons with numeric rating display |

### Key Animations

| Animation | Trigger |
|-----------|---------|
| `fadeInUp` | Card entrance — cards fade in and slide up |
| `translateY(-4px)` | Card hover — subtle lift effect |
| `scale(1.05)` | Image hover — gentle zoom inside card |

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
- ✅ ProductCard with hover animations & glassmorphism
- ✅ ProductGrid with responsive CSS Grid
- ✅ StarRating reusable component
- 🔲 Sidebar filter controls (category, price, rating)
- 🔲 Sort dropdown
- 🔲 Reset button & empty state
- 🔲 Loading skeletons & micro-animations
- 🔲 Responsive mobile design & accessibility
