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
│   ├── CategoryFilter ──── 6 category checkboxes
│   ├── PriceRangeSlider ── dual-thumb $0–$2,000 slider
│   └── RatingFilter ────── 5 radio buttons (1★ to 5★)
│       (ResetButton coming next)
│
└── ProductGrid (main)
    ├── ProductCard ──────── glassmorphism card with hover animations
    └── StarRating ──────── reusable filled/half/empty star display
```

### Simultaneous Filtering

All three filters work **simultaneously** — selecting Electronics + $50-$200 + 4★ sends:
```
GET /api/products?categories=Electronics&minPrice=50&maxPrice=200&minRating=4
```
Backend AND-s all filters together and returns the intersection.

---

## Components

| Component | Status | Purpose |
|-----------|--------|---------|
| `Sidebar` | ✅ | Sticky filter panel container |
| `CategoryFilter` | ✅ | 6 checkboxes with SVG checkmark animation |
| `PriceRangeSlider` | ✅ | Dual-thumb range slider ($0–$2,000) |
| `RatingFilter` | ✅ | 5 radio buttons with star icons & accent glow |
| `ProductGrid` | ✅ | CSS Grid with auto-fill responsive columns |
| `ProductCard` | ✅ | Glassmorphism card with hover lift, image zoom |
| `StarRating` | ✅ | Full/half/empty star icons |
| `ResetButton` | 🔲 | Reset all filters |
| `EmptyState` | 🔲 | No results message + reset CTA |
| `SortDropdown` | 🔲 | Sort by price/rating |
| `Loader` | 🔲 | Skeleton loading cards |

---

## Current Status

- ✅ All three filter controls working end-to-end
- ✅ Combinatorial intersect filtering (category + price + rating)
- ✅ Premium dark mode glassmorphism design
- ✅ Debounced API calls with AbortController
- 🔲 Empty state & reset button
- 🔲 Sort dropdown
- 🔲 Loading skeletons & micro-animations
- 🔲 Responsive mobile design & accessibility polish
