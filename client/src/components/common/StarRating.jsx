import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

/**
 * StarRating — Reusable star display component.
 *
 * Renders 5 star icons: full, half, or empty based on the rating value.
 * Also displays the numeric rating next to the stars.
 *
 * @param {Object} props
 * @param {number} props.rating - Rating value (e.g., 4.5)
 * @param {boolean} [props.showValue=true] - Whether to display numeric value
 * @param {string} [props.size] - CSS font-size for stars
 */
function StarRating({ rating, showValue = true, size }) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="star star--full" />);
  }
  if (hasHalf) {
    stars.push(<FaStarHalfAlt key="half" className="star star--half" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="star star--empty" />);
  }

  return (
    <span className="star-rating" style={size ? { fontSize: size } : undefined}>
      <span className="star-rating__stars">{stars}</span>
      {showValue && <span className="star-rating__value">{rating.toFixed(1)}</span>}
    </span>
  );
}

export default StarRating;
