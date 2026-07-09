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

## Design System

The app uses a **dark-mode glassmorphism** design with CSS custom properties:

| Token | Value | Purpose |
|-------|-------|---------|
| `--bg-primary` | `#0f0f1a` | Deep dark background |
| `--bg-secondary` | `#1a1a2e` | Card / sidebar background |
| `--accent` | `#6c63ff` | Primary accent — vibrant purple |
| `--price-color` | `#00d4aa` | Teal green for prices |
| `--star-color` | `#ffc107` | Gold for star ratings |

### Layout

- **Two-column flexbox**: Sticky sidebar (280px) + scrollable product grid (fluid)
- **Mobile (<768px)**: Sidebar becomes a toggleable drawer overlay
- **Tablet (768–1023px)**: Narrower sidebar (240px)

---

## Current Status

- ✅ Vite + React scaffolding with proxy
- ✅ Full CSS design system (tokens, reset, scrollbar, layout)
- ✅ Two-column layout skeleton (aside + main)
- ✅ Mobile-responsive drawer sidebar
- ✅ Gradient ShopVibe branding
- 🔲 API layer & useProducts hook
- 🔲 Product grid & cards
- 🔲 Sidebar filter controls
- 🔲 Sort, reset, empty state
- 🔲 Loading skeletons & animations
