import { useState, useCallback } from 'react';

/**
 * PriceRangeSlider — Dual-thumb range slider for min/max price filtering.
 *
 * Two overlaid <input type="range"> elements create a min/max selector.
 * CSS gradient renders the active range bar between thumbs.
 * onChange is called on every change; debouncing happens in the hook.
 */

const MIN_PRICE = 0;
const MAX_PRICE = 2000;
const STEP = 10;

function PriceRangeSlider({ priceRange, onChange }) {
  // Local state for smooth dragging (committed to parent on change)
  const [localMin, setLocalMin] = useState(priceRange.min);
  const [localMax, setLocalMax] = useState(priceRange.max);

  // Calculate percentage for the gradient track
  const minPercent = ((localMin - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
  const maxPercent = ((localMax - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  const trackStyle = {
    background: `linear-gradient(to right, 
      rgba(255,255,255,0.08) 0%, 
      rgba(255,255,255,0.08) ${minPercent}%, 
      var(--accent) ${minPercent}%, 
      var(--accent) ${maxPercent}%, 
      rgba(255,255,255,0.08) ${maxPercent}%, 
      rgba(255,255,255,0.08) 100%)`,
  };

  const handleMinChange = useCallback((e) => {
    const value = Math.min(Number(e.target.value), localMax - STEP);
    setLocalMin(value);
    onChange({ min: value, max: localMax });
  }, [localMax, onChange]);

  const handleMaxChange = useCallback((e) => {
    const value = Math.max(Number(e.target.value), localMin + STEP);
    setLocalMax(value);
    onChange({ min: localMin, max: value });
  }, [localMin, onChange]);

  // Sync local state if parent resets filters
  if (priceRange.min !== localMin && priceRange.min === MIN_PRICE && priceRange.max === MAX_PRICE) {
    setLocalMin(MIN_PRICE);
    setLocalMax(MAX_PRICE);
  }

  const formatCurrency = (val) => `$${val.toLocaleString()}`;

  return (
    <div className="filter-section" id="price-filter">
      <span className="filter-section__label">Price Range</span>

      <div className="price-slider">
        <div className="price-slider__track" style={trackStyle} />

        <input
          type="range"
          className="price-slider__input price-slider__input--min"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={STEP}
          value={localMin}
          onChange={handleMinChange}
          aria-label="Minimum price"
          id="price-min"
        />

        <input
          type="range"
          className="price-slider__input price-slider__input--max"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={STEP}
          value={localMax}
          onChange={handleMaxChange}
          aria-label="Maximum price"
          id="price-max"
        />
      </div>

      <div className="price-slider__labels">
        <span className="price-slider__value">{formatCurrency(localMin)}</span>
        <span className="price-slider__separator">—</span>
        <span className="price-slider__value">{formatCurrency(localMax)}</span>
      </div>
    </div>
  );
}

export default PriceRangeSlider;
