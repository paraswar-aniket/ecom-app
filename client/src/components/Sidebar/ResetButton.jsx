import { HiOutlineRefresh } from 'react-icons/hi';

/**
 * ResetButton — Resets all filters to defaults.
 *
 * Triggers resetFilters() from the useProducts hook, which resets
 * categories, price range, min rating, and sort order, then fires
 * a fresh API call to load the full inventory.
 */
function ResetButton({ onReset }) {
  return (
    <div className="reset-button-wrapper">
      <button
        className="reset-button"
        onClick={onReset}
        aria-label="Reset all filters"
        id="reset-filters"
      >
        <HiOutlineRefresh className="reset-button__icon" />
        Reset All Filters
      </button>
    </div>
  );
}

export default ResetButton;
