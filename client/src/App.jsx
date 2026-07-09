import { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useProducts } from './hooks/useProducts'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Instantiate the custom hook — all filter state + API logic lives here
  const {
    categories, priceRange, minRating, sortBy,
    products, loading, error,
    setCategories, setPriceRange, setMinRating, setSortBy,
    resetFilters,
  } = useProducts()

  return (
    <div className="app">
      {/* Mobile overlay */}
      <div
        className={`app__overlay ${sidebarOpen ? 'app__overlay--visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`app__sidebar ${sidebarOpen ? 'app__sidebar--open' : ''}`}>
        <div style={{ padding: 'var(--gap)' }}>
          <h2 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-lg)' }}>Filters</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)', marginTop: '8px' }}>
            Filter controls coming in next commits...
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="app__main">
        <header className="app__header">
          <div>
            <h1 className="app__title">ShopVibe</h1>
            <p className="app__subtitle">
              {loading
                ? 'Loading products...'
                : error
                  ? `Error: ${error}`
                  : `${products.length} products loaded`
              }
            </p>
          </div>
          <button
            className="app__menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle filters menu"
            id="menu-toggle"
          >
            <HiOutlineMenuAlt3 />
            Filters
          </button>
        </header>

        <section>
          {loading && <p style={{ color: 'var(--text-secondary)' }}>Fetching products from API...</p>}
          {error && <p style={{ color: 'var(--danger)' }}>Error: {error}</p>}
          {!loading && !error && (
            <p style={{ color: 'var(--price-color)' }}>
              ✅ Successfully loaded {products.length} products. Grid coming next!
            </p>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
