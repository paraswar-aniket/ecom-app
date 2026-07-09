import './Loader.css';

/**
 * Loader — Skeleton card placeholders with shimmer animation.
 *
 * Renders 8 grey pulsing rectangles mimicking the card layout.
 * Uses CSS @keyframes shimmer for a light gradient sweep effect.
 */
function Loader({ count = 8 }) {
  return (
    <div className="skeleton-grid" aria-label="Loading products" role="status">
      {Array.from({ length: count }, (_, i) => (
        <div className="skeleton-card" key={i}>
          <div className="skeleton-card__image skeleton-shimmer" />
          <div className="skeleton-card__body">
            <div className="skeleton-card__title skeleton-shimmer" />
            <div className="skeleton-card__desc skeleton-shimmer" />
            <div className="skeleton-card__desc skeleton-card__desc--short skeleton-shimmer" />
            <div className="skeleton-card__footer">
              <div className="skeleton-card__price skeleton-shimmer" />
              <div className="skeleton-card__stars skeleton-shimmer" />
            </div>
          </div>
        </div>
      ))}
      <span className="sr-only">Loading products, please wait...</span>
    </div>
  );
}

export default Loader;
