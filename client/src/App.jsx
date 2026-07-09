import { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useProducts } from './hooks/useProducts'
import Sidebar from './components/Sidebar/Sidebar'
import ProductGrid from './components/ProductGrid/ProductGrid'
import './App.css'

/**
 * App — Root layout component.
 *
 * Two-column flexbox: sticky sidebar (left) + scrollable product grid (right).
 * Instantiates the useProducts hook and passes state down to children.
 * On mobile (<768px), sidebar becomes a toggleable drawer overlay.
 */
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const {
    categories, priceRange, minRating, sortBy,
    products, loading, initialLoad, error,
    setCategories, setPriceRange, setMinRating, setSortBy,
    resetFilters,
  } = useProducts()

  return (
    <div className="app">
      {/* Mobile overlay — click to close sidebar drawer */}
      <div
        className={`app__overlay ${sidebarOpen ? 'app__overlay--visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Sidebar — sticky on desktop, drawer on mobile */}
      <aside
        className={`app__sidebar ${sidebarOpen ? 'app__sidebar--open' : ''}`}
        role="complementary"
        aria-label="Product filters"
      >
        <Sidebar
          categories={categories}
          setCategories={setCategories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          minRating={minRating}
          setMinRating={setMinRating}
          resetFilters={resetFilters}
          closeSidebar={() => setSidebarOpen(false)}
        />
      </aside>

      {/* Main Content */}
      <main className="app__main" role="main">
        <header className="app__header">
          <div>
            <h1 className="app__title">ShopVibe</h1>
            <p className="app__subtitle">
              {loading
                ? 'Loading products...'
                : error
                  ? `Error: ${error}`
                  : `Showing ${products.length} product${products.length !== 1 ? 's' : ''}`
              }
            </p>
          </div>
          <button
            className="app__menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle filters menu"
            aria-expanded={sidebarOpen}
            id="menu-toggle"
          >
            <HiOutlineMenuAlt3 />
            <span>Filters</span>
          </button>
        </header>

        {/* Error state */}
        {error && (
          <div className="app__error" role="alert">
            <p>⚠️ {error}</p>
            <button className="app__error-retry" onClick={resetFilters}>
              Try Again
            </button>
          </div>
        )}

        {/* Product grid / loader / empty state */}
        {!error && (
          <ProductGrid
            products={products}
            loading={loading}
            initialLoad={initialLoad}
            sortBy={sortBy}
            setSortBy={setSortBy}
            resetFilters={resetFilters}
          />
        )}
      </main>
    </div>
  )
}

export default App
