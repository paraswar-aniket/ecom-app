import CategoryFilter from './CategoryFilter';
import PriceRangeSlider from './PriceRangeSlider';
import RatingFilter from './RatingFilter';
import ResetButton from './ResetButton';
import './Sidebar.css';

/**
 * Sidebar — Sticky filter panel container with glassmorphism styling.
 * Contains filter sections separated by subtle dividers.
 */
function Sidebar({
  categories,
  setCategories,
  priceRange,
  setPriceRange,
  minRating,
  setMinRating,
  resetFilters,
  closeSidebar,
}) {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar__header">
        <h2 className="sidebar__title">Filters</h2>
        <button
          className="sidebar__close"
          onClick={closeSidebar}
          aria-label="Close filters"
          id="sidebar-close"
        >
          ✕
        </button>
      </div>

      <div className="sidebar__content">
        {/* Category Filter */}
        <CategoryFilter
          selected={categories}
          onChange={setCategories}
        />

        {/* Price Range Slider */}
        <PriceRangeSlider
          priceRange={priceRange}
          onChange={setPriceRange}
        />

        {/* Rating Filter */}
        <RatingFilter
          minRating={minRating}
          onChange={setMinRating}
        />

        {/* Reset All Filters */}
        <ResetButton onReset={resetFilters} />
      </div>
    </div>
  );
}

export default Sidebar;
