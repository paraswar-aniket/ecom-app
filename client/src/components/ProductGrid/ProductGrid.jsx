import ProductCard from './ProductCard';
import './ProductGrid.css';

/**
 * ProductGrid — Responsive CSS Grid container for product cards.
 *
 * @param {Object} props
 * @param {Object[]} props.products - Array of product objects
 * @param {boolean} props.loading - Whether data is being fetched
 */
function ProductGrid({ products, loading }) {
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
