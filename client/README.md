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

> **Note:** Backend must be running on port 5000 first. The Vite proxy forwards `/api` requests automatically.

---

## Architecture

```
App.jsx
├── useProducts() hook ──── manages all filter state + API calls
│
├── Sidebar (aside)
│   ├── CategoryFilter ──── 6 category checkboxes with animated checks
│   └── PriceRangeSlider ── dual-thumb min/max price selector
│       (RatingFilter, ResetButton coming next)
│
└── ProductGrid (main)
    ├── ProductCard ──────── glassmorphism card with hover animations
    └── StarRating ──────── reusable filled/half/empty star display
```

### Data Flow

1. User interacts with a filter (checkbox, slider, radio, dropdown)
2. Component calls the corresponding setter from the hook
3. `useEffect` detects change → debounced `GET /api/products?...`
4. Response updates `products[]` → grid re-renders

**Key:** Frontend never filters data — all business logic is server-side.

---

## Components

| Component | Status | Purpose |
|-----------|--------|---------|
| `Sidebar` | ✅ | Sticky filter panel container |
| `CategoryFilter` | ✅ | 6 checkboxes with SVG checkmark animation |
| `PriceRangeSlider` | ✅ | Dual-thumb range slider ($0–$2,000) |
| `ProductGrid` | ✅ | CSS Grid with auto-fill responsive columns |
| `ProductCard` | ✅ | Glassmorphism card with hover lift, image zoom |
| `StarRating` | ✅ | Full/half/empty star icons |
| `RatingFilter` | 🔲 | Radio buttons with star display |
| `ResetButton` | 🔲 | Reset all filters |
| `SortDropdown` | 🔲 | Sort by price/rating |
| `EmptyState` | 🔲 | No results message |
| `Loader` | 🔲 | Skeleton loading cards |

---

## Current Status

- ✅ Vite + React scaffolding with proxy
- ✅ Full CSS design system (dark mode glassmorphism)
- ✅ API layer with Axios + AbortController + debouncing
- ✅ ProductCard & ProductGrid with animations
- ✅ Sidebar with CategoryFilter (end-to-end)
- ✅ PriceRangeSlider with dual-thumb control
- 🔲 Rating filter
- 🔲 Sort, reset, empty state, loading skeletons
- 🔲 Responsive mobile design & accessibility polish
