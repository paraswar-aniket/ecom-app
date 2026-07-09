import StarRating from '../common/StarRating';
import './ProductCard.css';

/**
 * ProductCard — Individual product card with image, name, price, rating, and category badge.
 *
 * Features:
 * - Lazy-loaded images with object-fit cover
 * - Text truncation with -webkit-line-clamp
 * - Hover lift animation + image zoom
 * - Staggered fadeInUp entrance animation
 * - Semantic article element with ARIA labels
 *
 * @param {Object} props
 * @param {Object} props.product - Product object from the API
 * @param {number} [props.index=0] - Index for staggered animation delay
 */
function ProductCard({ product, index = 0 }) {
  // Cap stagger delay at 0.5s to avoid cards feeling too slow
  const animDelay = `${Math.min(index * 0.05, 0.5)}s`;

  return (
    <article
      className="product-card"
      id={`product-${product.id}`}
      style={{ animationDelay: animDelay }}
      aria-label={`${product.name}, ${product.category}, $${product.price.toFixed(2)}, ${product.rating} stars`}
    >
      <div className="product-card__image-wrapper">
        <img
          src={product.image_url}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        <span className="product-card__category-badge">{product.category}</span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name" title={product.name}>
          {product.name}
        </h3>

        <p className="product-card__description">{product.description}</p>

        <div className="product-card__footer">
          <span className="product-card__price" aria-label={`Price: $${product.price.toFixed(2)}`}>
            ${product.price.toFixed(2)}
          </span>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
