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
    ├── ProductCard ──────── glassmorphism card with hover animations
    ├── StarRating ──────── reusable filled/half/empty star display
    └── EmptyState ──────── "No items match" + Reset Filters CTA
```

### Edge Cases Handled

| Scenario | Behaviour |
|----------|-----------|
| Zero matching products | Grid → EmptyState with "Reset Filters" button |
| All filters cleared | Full inventory (48 products) |
| Price slider at extremes | $0–$2,000 = no price filter |
| Rating = 1★ | Shows all products |

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
| `SortDropdown` | 🔲 | Sort by price/rating |
| `Loader` | 🔲 | Skeleton loading cards |

---

## Current Status

- ✅ All three filter controls working end-to-end
- ✅ Empty state with reset button
- ✅ Sidebar reset button (resets all filters + sort)
- ✅ Premium dark mode glassmorphism design
- 🔲 Sort dropdown
- 🔲 Loading skeletons & micro-animations
- 🔲 Responsive mobile design & accessibility polish
- 🔲 Final README & cleanup
