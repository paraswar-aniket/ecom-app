import ProductCard from './ProductCard';
import EmptyState from './EmptyState';
import './ProductGrid.css';

/**
 * ProductGrid — Responsive CSS Grid container for product cards.
 *
 * Conditionally renders EmptyState when no products match filters.
 *
 * @param {Object} props
 * @param {Object[]} props.products - Array of product objects
 * @param {boolean} props.loading - Whether data is being fetched
 * @param {Function} props.resetFilters - Reset all filters callback
 */
function ProductGrid({ products, loading, resetFilters }) {
  // Show empty state when no products and not loading
  if (!loading && products.length === 0) {
    return (
      <section className="product-grid" id="product-grid">
        <EmptyState onReset={resetFilters} />
      </section>
    );
  }

  return (
    <section className="product-grid" id="product-grid">
      {/* Grid of product cards */}
      <div className={`product-grid__container ${loading ? 'product-grid__container--loading' : ''}`}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
