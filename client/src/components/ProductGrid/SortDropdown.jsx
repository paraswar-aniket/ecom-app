import { HiOutlineSelector } from 'react-icons/hi';

/**
 * SortDropdown — Sort By control positioned at top-right of the grid area.
 *
 * Styled <select> with options for default, price asc/desc, and top rated.
 * onChange updates sortBy state → triggers API call → grid re-renders in new order.
 */

const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating_desc', label: 'Top Rated First' },
];

function SortDropdown({ sortBy, onChange }) {
  return (
    <div className="sort-dropdown" id="sort-dropdown">
      <label className="sort-dropdown__label" htmlFor="sort-select">
        Sort by
      </label>
      <div className="sort-dropdown__wrapper">
        <select
          className="sort-dropdown__select"
          id="sort-select"
          value={sortBy}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Sort products"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <HiOutlineSelector className="sort-dropdown__icon" />
      </div>
    </div>
  );
}

export default SortDropdown;
