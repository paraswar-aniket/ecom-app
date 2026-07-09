/**
 * CategoryFilter — Checkbox group for product categories.
 *
 * Renders custom-styled checkboxes with animated check indicators.
 * Toggling a checkbox adds/removes the category from the selected array.
 */

const CATEGORIES = [
  'Electronics',
  'Apparel',
  'Footwear',
  'Home & Kitchen',
  'Books',
  'Sports',
];

function CategoryFilter({ selected, onChange }) {
  const handleToggle = (category) => {
    if (selected.includes(category)) {
      onChange(selected.filter((c) => c !== category));
    } else {
      onChange([...selected, category]);
    }
  };

  return (
    <div className="filter-section" id="category-filter">
      <span className="filter-section__label">Categories</span>
      <div className="category-filter__list">
        {CATEGORIES.map((category) => (
          <label key={category} className="category-filter__item">
            <input
              type="checkbox"
              className="category-filter__input"
              checked={selected.includes(category)}
              onChange={() => handleToggle(category)}
              id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              aria-label={`Filter by ${category}`}
            />
            <span className="category-filter__checkbox">
              <svg className="category-filter__checkmark" viewBox="0 0 12 12">
                <polyline points="2 6 5 9 10 3" />
              </svg>
            </span>
            <span className="category-filter__name">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
