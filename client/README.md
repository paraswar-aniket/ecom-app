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
│   ├── RatingFilter ────── 5 radio buttons (1★ to 5★)
│   └── ResetButton ─────── resets all filters to defaults
│
└── ProductGrid (main)
    ├── SortDropdown ─────── sort by price/rating dropdown
    ├── ProductCard ──────── glassmorphism card with hover animations
    ├── StarRating ──────── reusable filled/half/empty star display
    └── EmptyState ──────── "No items match" + Reset Filters CTA
```

### Filter + Sort Pipeline

Filters execute first, then sort applies to filtered results:
```
GET /api/products?categories=Electronics&minPrice=50&maxPrice=200&minRating=4&sortBy=price_asc
```

---

## Components

| Component | Status | Purpose |
|-----------|--------|---------|
| `Sidebar` | ✅ | Sticky filter panel container |
| `CategoryFilter` | ✅ | 6 checkboxes with SVG checkmark animation |
| `PriceRangeSlider` | ✅ | Dual-thumb range slider ($0–$2,000) |
| `RatingFilter` | ✅ | 5 radio buttons with star icons & accent glow |
| `ResetButton` | ✅ | Danger-styled reset with icon spin animation |
| `ProductGrid` | ✅ | CSS Grid with auto-fill responsive columns |
| `ProductCard` | ✅ | Glassmorphism card with hover lift, image zoom |
| `StarRating` | ✅ | Full/half/empty star icons |
| `EmptyState` | ✅ | No results with reset CTA |
| `SortDropdown` | ✅ | 4 sort options with custom styled select |
| `Loader` | 🔲 | Skeleton loading cards |

---

## Current Status

- ✅ All three filter controls working end-to-end
- ✅ Sort dropdown (Default, Price Low/High, Top Rated)
- ✅ Empty state with reset + sidebar reset button
- ✅ Filter + sort pipeline verified
- 🔲 Loading skeletons & micro-animations
- 🔲 Responsive mobile design & accessibility polish
- 🔲 Final README & cleanup
