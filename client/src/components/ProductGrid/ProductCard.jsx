import StarRating from '../common/StarRating';
import './ProductCard.css';

/**
 * ProductCard — Individual product card with image, name, price, rating, and category badge.
 *
 * @param {Object} props
 * @param {Object} props.product - Product object from the API
 */
function ProductCard({ product }) {
  return (
    <article className="product-card" id={`product-${product.id}`}>
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
          <span className="product-card__price">
            ${product.price.toFixed(2)}
          </span>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
