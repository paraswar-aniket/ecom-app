import StarRating from '../common/StarRating';

/**
 * RatingFilter — Radio button group for minimum star rating selection.
 *
 * Renders 5 radio buttons (1★ to 5★) with star icon display.
 * Custom-styled radio buttons with accent glow on selection.
 */

const RATINGS = [1, 2, 3, 4, 5];

function RatingFilter({ minRating, onChange }) {
  return (
    <div className="filter-section" id="rating-filter">
      <span className="filter-section__label">Minimum Rating</span>
      <div className="rating-filter__list">
        {RATINGS.map((rating) => (
          <label key={rating} className="rating-filter__item">
            <input
              type="radio"
              className="rating-filter__input"
              name="minRating"
              value={rating}
              checked={minRating === rating}
              onChange={() => onChange(rating)}
              id={`rating-${rating}`}
              aria-label={`${rating} stars and above`}
            />
            <span className="rating-filter__radio" />
            <span className="rating-filter__stars">
              <StarRating rating={rating} showValue={false} />
            </span>
            <span className="rating-filter__label">
              {rating === 1 ? 'All' : `${rating}★ & up`}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RatingFilter;
