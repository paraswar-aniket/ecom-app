import ProductCard from './ProductCard';
import EmptyState from './EmptyState';
import SortDropdown from './SortDropdown';
import Loader from '../common/Loader';
import './ProductGrid.css';

/**
 * ProductGrid — Responsive CSS Grid container for product cards.
 *
 * Conditionally renders:
 * - Loader (skeleton cards) during initial load
 * - EmptyState when no products match filters
 * - Product cards in a responsive grid
 *
 * @param {Object} props
 * @param {Object[]} props.products - Array of product objects
 * @param {boolean} props.loading - Whether data is being fetched
 * @param {boolean} props.initialLoad - Whether this is the first load
 * @param {string} props.sortBy - Current sort order
 * @param {Function} props.setSortBy - Sort order setter
 * @param {Function} props.resetFilters - Reset all filters callback
 */
function ProductGrid({ products, loading, initialLoad, sortBy, setSortBy, resetFilters }) {
  // Show full skeleton on initial page load
  if (initialLoad && loading) {
    return (
      <section className="product-grid" id="product-grid" aria-busy="true">
        <Loader count={8} />
      </section>
    );
  }

  // Show empty state when no products and not loading
  if (!loading && products.length === 0) {
    return (
      <section className="product-grid" id="product-grid" aria-live="polite">
        <SortDropdown sortBy={sortBy} onChange={setSortBy} />
        <EmptyState onReset={resetFilters} />
      </section>
    );
  }

  return (
    <section className="product-grid" id="product-grid" aria-live="polite" aria-busy={loading}>
      <SortDropdown sortBy={sortBy} onChange={setSortBy} />

      {/* Grid of product cards */}
      <div className={`product-grid__container ${loading ? 'product-grid__container--loading' : ''}`}>
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
