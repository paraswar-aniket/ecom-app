import { HiOutlineEmojiSad } from 'react-icons/hi';
import { HiOutlineRefresh } from 'react-icons/hi';

/**
 * EmptyState — Displayed when no products match the current filters.
 *
 * Shows an icon, message, and a "Reset Filters" button that calls
 * the same reset function as the sidebar's ResetButton.
 */
function EmptyState({ onReset }) {
  return (
    <div className="empty-state" id="empty-state">
      <div className="empty-state__icon">
        <HiOutlineEmojiSad />
      </div>
      <h3 className="empty-state__title">No items match your criteria</h3>
      <p className="empty-state__text">
        Try adjusting your filters to discover more products.
      </p>
      <button
        className="empty-state__reset"
        onClick={onReset}
        aria-label="Reset filters to show all products"
        id="empty-state-reset"
      >
        <HiOutlineRefresh />
        Reset Filters
      </button>
    </div>
  );
}

export default EmptyState;
