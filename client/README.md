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

## Current Status

- ✅ Vite + React scaffolding
- ✅ Axios and react-icons installed
- ✅ API proxy configured (`/api` → `http://localhost:5000`)
- ✅ Google Fonts (Inter) linked
- ✅ SEO meta tags added
- ✅ Boilerplate cleaned up
