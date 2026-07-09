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
│   └── CategoryFilter ──── 6 category checkboxes with animated checks
│       (PriceRangeSlider, RatingFilter, ResetButton coming next)
│
└── ProductGrid (main)
    ├── ProductCard ──────── glassmorphism card with hover animations
    └── StarRating ──────── reusable filled/half/empty star display
```

### Data Flow

1. User clicks a category checkbox
2. `CategoryFilter` calls `setCategories()` from the hook
3. `useEffect` detects change → fires `GET /api/products?categories=...`
4. Response updates `products[]` state
5. `ProductGrid` re-renders with filtered cards

**Key:** Frontend never filters data — every change triggers a backend API call.

---

## Components

| Component | Status | Purpose |
|-----------|--------|---------|
| `Sidebar` | ✅ | Sticky filter panel container |
| `CategoryFilter` | ✅ | 6 category checkboxes with custom SVG checkmark animation |
| `ProductGrid` | ✅ | CSS Grid with auto-fill responsive columns |
| `ProductCard` | ✅ | Glassmorphism card with hover lift, image zoom |
| `StarRating` | ✅ | Full/half/empty star icons with numeric display |
| `PriceRangeSlider` | 🔲 | Dual-thumb range slider |
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
- ✅ Sidebar with CategoryFilter (end-to-end filtering works)
- 🔲 Price range slider
- 🔲 Rating filter
- 🔲 Sort, reset, empty state, loading skeletons
- 🔲 Responsive mobile design & accessibility polish
