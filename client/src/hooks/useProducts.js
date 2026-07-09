import { useState, useEffect, useCallback, useRef } from 'react';
import { fetchProducts } from '../api/productApi';

// Default filter values
const DEFAULT_CATEGORIES = [];
const DEFAULT_PRICE_RANGE = { min: 0, max: 2000 };
const DEFAULT_MIN_RATING = 1;
const DEFAULT_SORT_BY = 'default';

/**
 * Custom hook — manages all filter state, API communication, and debouncing.
 *
 * Returns filter state, setters, products, loading/error, and a resetFilters action.
 */
export function useProducts() {
  // ── Filter State ─────────────────────────────────────────────────
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [priceRange, setPriceRange] = useState(DEFAULT_PRICE_RANGE);
  const [minRating, setMinRating] = useState(DEFAULT_MIN_RATING);
  const [sortBy, setSortBy] = useState(DEFAULT_SORT_BY);

  // ── Data State ───────────────────────────────────────────────────
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);

  // Ref for AbortController to cancel in-flight requests
  const abortControllerRef = useRef(null);
  // Ref for debounce timer
  const debounceTimerRef = useRef(null);

  // ── Fetch Products (reactive to filter changes) ──────────────────
  useEffect(() => {
    // Clear any existing debounce timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Debounce by 300ms to avoid rapid API calls during slider drags
    debounceTimerRef.current = setTimeout(() => {
      // Cancel any in-flight request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create a new AbortController for this request
      const controller = new AbortController();
      abortControllerRef.current = controller;

      setLoading(true);
      setError(null);

      fetchProducts(
        {
          categories,
          minPrice: priceRange.min,
          maxPrice: priceRange.max,
          minRating,
          sortBy,
        },
        controller.signal
      )
        .then((data) => {
          if (!controller.signal.aborted) {
            setProducts(data.products || []);
            setLoading(false);
            if (initialLoad) setInitialLoad(false);
          }
        })
        .catch((err) => {
          if (!controller.signal.aborted) {
            // Don't treat abort errors as real errors
            if (err.name !== 'CanceledError' && err.name !== 'AbortError') {
              setError(err.response?.data?.errors?.[0]?.msg || err.message || 'Failed to fetch products');
              setLoading(false);
            }
          }
        });
    }, 300);

    // Cleanup: cancel debounce timer and abort request on unmount or dep change
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [categories, priceRange, minRating, sortBy]);

  // ── Cleanup AbortController on unmount ───────────────────────────
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  // ── Reset All Filters ────────────────────────────────────────────
  const resetFilters = useCallback(() => {
    setCategories(DEFAULT_CATEGORIES);
    setPriceRange(DEFAULT_PRICE_RANGE);
    setMinRating(DEFAULT_MIN_RATING);
    setSortBy(DEFAULT_SORT_BY);
  }, []);

  return {
    // State
    categories,
    priceRange,
    minRating,
    sortBy,
    products,
    loading,
    initialLoad,
    error,

    // Setters
    setCategories,
    setPriceRange,
    setMinRating,
    setSortBy,

    // Actions
    resetFilters,
  };
}
