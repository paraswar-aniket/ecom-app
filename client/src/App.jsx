import { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { useProducts } from './hooks/useProducts'
import Sidebar from './components/Sidebar/Sidebar'
import ProductGrid from './components/ProductGrid/ProductGrid'
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
      <main className="app__main">
        <header className="app__header">
          <div>
            <h1 className="app__title">ShopVibe</h1>
            <p className="app__subtitle">
              {loading
                ? 'Loading products...'
                : error
                  ? `Error: ${error}`
                  : `Showing ${products.length} products`
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

        {error && (
          <div style={{ padding: '20px', color: 'var(--danger)', textAlign: 'center' }}>
            Error: {error}
          </div>
        )}

        {!error && (
          <ProductGrid products={products} loading={loading} sortBy={sortBy} setSortBy={setSortBy} resetFilters={resetFilters} />
        )}
      </main>
    </div>
  )
}

export default App
