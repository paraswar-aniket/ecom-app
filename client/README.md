# ShopVibe — Frontend Client

React SPA for the e-commerce multi-filter product marketplace, built with **React 18**, **Vite**, and **Vanilla CSS**.

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Build Tool | Vite | Fast dev server with HMR, optimised builds |
| UI Library | React 18+ | Component-based UI with hooks |
| HTTP Client | Axios | API calls to Express backend |
| Icons | react-icons | Star icons, filter icons, UI embellishments |
| Styling | Vanilla CSS | Custom design system, CSS variables, animations |
| Fonts | Google Fonts (Inter) | Modern, clean typography |
| State | React useState + useEffect | Local component state for filters & products |

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

### 3. Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
client/
├── index.html                    # Root HTML with meta tags, Google Font link
├── vite.config.js                # Vite config — proxy /api to Express backend
├── src/
│   ├── main.jsx                  # React DOM render entry point
│   ├── App.jsx                   # Root layout — Sidebar + ProductGrid
│   ├── App.css                   # Global styles, CSS variables, design tokens
│   ├── index.css                 # Minimal (design system lives in App.css)
│   ├── api/
│   │   └── productApi.js         # Axios instance + fetchProducts() function
│   ├── components/
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx       # Container for all filter controls
│   │   │   ├── Sidebar.css       # Styles for sidebar + all filter components
│   │   │   ├── CategoryFilter.jsx# Checkbox group for 6 categories
│   │   │   ├── PriceRangeSlider.jsx # Dual-thumb range slider ($0–$2,000)
│   │   │   ├── RatingFilter.jsx  # Radio buttons for min star rating (1★–5★)
│   │   │   └── ResetButton.jsx   # "Reset All Filters" button
│   │   ├── ProductGrid/
│   │   │   ├── ProductGrid.jsx   # Grid container + empty state + loader
│   │   │   ├── ProductGrid.css   # Grid, empty state, sort dropdown styles
│   │   │   ├── ProductCard.jsx   # Individual product card
│   │   │   ├── ProductCard.css   # Card styling with glassmorphism & animations
│   │   │   ├── SortDropdown.jsx  # "Sort By" dropdown (top-right)
│   │   │   └── EmptyState.jsx    # "No items match" + Reset button
│   │   └── common/
│   │       ├── StarRating.jsx    # Reusable star display (full/half/empty)
│   │       ├── Loader.jsx        # Skeleton card loading placeholders
│   │       └── Loader.css        # Skeleton shimmer animation
│   └── hooks/
│       └── useProducts.js        # Custom hook — filter state, API, debouncing
└── package.json
```

---

## Architecture & Data Flow

```
App.jsx
├── useProducts() hook ──── manages all filter state + API calls
│   ├── categories[]         selected category names
│   ├── priceRange{min,max}  price bounds ($0–$2,000)
│   ├── minRating            minimum star rating (1–5)
│   ├── sortBy               sort order key
│   ├── products[]           fetched product list
│   ├── loading / error      request state
│   ├── initialLoad          true until first successful fetch
│   └── resetFilters()       resets all filters & sort
│
├── Sidebar (aside)
│   ├── CategoryFilter ──── 6 checkboxes with animated SVG checkmarks
│   ├── PriceRangeSlider ── dual-thumb min/max price selector
│   ├── RatingFilter ────── 5 radio buttons with star icons
│   └── ResetButton ─────── resets all filters to defaults
│
└── ProductGrid (main)
    ├── SortDropdown ─────── Default / Price Low→High / Price High→Low / Top Rated
    ├── Loader ───────────── skeleton cards on initial load
    ├── ProductCard × N ──── glassmorphism cards with hover animations
    └── EmptyState ──────── "No items match" + Reset CTA
```

### Unidirectional Data Flow

1. **User interacts** with a filter control (checkbox, slider, radio, dropdown)
2. The component calls a **state setter** from `useProducts` hook
3. `useEffect` detects the change → **debounced GET request** to `/api/products?...`
4. Response updates `products[]` → React **re-renders** the grid
5. **Key**: Frontend never filters or sorts — all business logic is server-side

### API Layer (`productApi.js`)

- Axios instance with `baseURL: '/api'` (proxied to Express via Vite)
- `fetchProducts(params, signal)` builds query string, supports AbortController
- Sends: `categories`, `minPrice`, `maxPrice`, `minRating`, `sortBy`

### Custom Hook (`useProducts.js`)

- Reactive `useEffect` watches all filter state as dependencies
- **300ms debounce** to avoid API spam during slider drags
- **AbortController** cancels in-flight requests on rapid filter changes
- `initialLoad` flag for skeleton vs. opacity-fade loading states
- `resetFilters()` resets everything to defaults

---

## Design System

### Dark Mode Glassmorphism Palette

| Token | Value | Purpose |
|-------|-------|---------|
| `--bg-primary` | `#0f0f1a` | Deep dark background |
| `--bg-secondary` | `#1a1a2e` | Card / sidebar background |
| `--bg-glass` | `rgba(255,255,255,0.05)` | Glassmorphism panels |
| `--accent` | `#6c63ff` | Primary accent — vibrant purple |
| `--price-color` | `#00d4aa` | Teal green for prices |
| `--star-color` | `#ffc107` | Gold for star ratings |
| `--danger` | `#ff4757` | Reset / error red |

### Animations

| Animation | Trigger | Effect |
|-----------|---------|--------|
| `fadeInUp` | Card entrance | Cards fade in and slide up with staggered delays |
| `shimmer` | Loading state | Light gradient sweeps across skeleton placeholders |
| `translateY(-4px)` | Card hover | Subtle lift with enhanced shadow |
| `scale(1.05)` | Image hover | Gentle zoom inside card |
| `scale(0.97)` | Button press | Tactile press feedback |
| `rotate(180deg)` | Reset hover | Icon spin on reset button |
| `stroke-dashoffset` | Checkbox check | SVG checkmark draws in on selection |

### Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| ≥ 1024px | Sidebar (280px, sticky) + Grid (3–4 columns) |
| 768–1023px | Sidebar (240px, sticky) + Grid (2–3 columns) |
| < 768px | Sidebar as drawer overlay + Grid (1–2 columns) |

---

## Edge Cases

| Scenario | UI Behaviour |
|----------|-------------|
| Zero matching products | EmptyState with "Reset Filters" button |
| API error / network failure | Error alert with "Try Again" button |
| Initial page load | Full skeleton cards with shimmer animation |
| Subsequent filter changes | Subtle opacity fade (not full skeleton) |
| All filters cleared | Full inventory (48 products) |
| Price slider at extremes | $0–$2,000 = no price filter |
| Rating = 1★ | Shows all products |

---

## Accessibility

- **ARIA roles**: `complementary` on sidebar, `main` on content area
- **ARIA labels**: All interactive elements have descriptive `aria-label` attributes
- **ARIA live regions**: `aria-live="polite"` on product grid for screen readers
- **Focus visible**: Global `focus-visible` outline on all interactive elements
- **Keyboard navigation**: All controls accessible via Tab, Enter, Space, Arrow keys
- **Semantic HTML**: `<aside>`, `<main>`, `<article>`, `<h1>`/`<h2>`/`<h3>` hierarchy
- **Screen reader text**: `.sr-only` class for loading state announcements
- **Unique IDs**: Every interactive element has a unique, descriptive `id`
- **Lazy loading**: Product images use `loading="lazy"` for performance

---

## Components Reference

| Component | File | Purpose |
|-----------|------|---------|
| `App` | `App.jsx` | Root layout, hook instantiation, prop drilling |
| `Sidebar` | `Sidebar/Sidebar.jsx` | Sticky filter panel container |
| `CategoryFilter` | `Sidebar/CategoryFilter.jsx` | 6 checkboxes with SVG checkmark animation |
| `PriceRangeSlider` | `Sidebar/PriceRangeSlider.jsx` | Dual-thumb range slider with gradient track |
| `RatingFilter` | `Sidebar/RatingFilter.jsx` | 5 radio buttons with star icons & glow |
| `ResetButton` | `Sidebar/ResetButton.jsx` | Danger-styled reset with icon spin |
| `ProductGrid` | `ProductGrid/ProductGrid.jsx` | Grid container + conditional rendering |
| `ProductCard` | `ProductGrid/ProductCard.jsx` | Glassmorphism card with staggered entrance |
| `SortDropdown` | `ProductGrid/SortDropdown.jsx` | 4 sort options with custom select |
| `EmptyState` | `ProductGrid/EmptyState.jsx` | No results with reset CTA |
| `StarRating` | `common/StarRating.jsx` | Full/half/empty star icons |
| `Loader` | `common/Loader.jsx` | 8 skeleton cards with shimmer animation |
