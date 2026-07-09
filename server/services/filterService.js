const { db } = require('../config/db');

// Valid sort options mapped to SQL ORDER BY clauses
const SORT_MAP = {
  default: 'id ASC',
  price_asc: 'price ASC',
  price_desc: 'price DESC',
  rating_desc: 'rating DESC',
};

/**
 * Retrieve filtered and sorted products from the database.
 *
 * Uses dynamic parameterised SQL — each filter conditionally appends
 * a WHERE clause. When all filters are at their default state, the
 * base query `WHERE 1=1` returns the full inventory.
 *
 * @param {Object} filters
 * @param {string[]} [filters.categories] - Array of category names
 * @param {number}   [filters.minPrice=0]       - Lower price bound (inclusive)
 * @param {number}   [filters.maxPrice=999999]   - Upper price bound (inclusive)
 * @param {number}   [filters.minRating=1]       - Minimum star rating (inclusive)
 * @param {string}   [filters.sortBy='default']  - Sort order key
 * @returns {{ products: Object[], count: number, appliedFilters: Object }}
 */
function getFilteredProducts(filters = {}) {
  const {
    categories = [],
    minPrice = 0,
    maxPrice = 999999,
    minRating = 1,
    sortBy = 'default',
  } = filters;

  // ── Build dynamic query ──────────────────────────────────────────
  let sql = 'SELECT * FROM products WHERE 1=1';
  const params = [];

  // Category filter — IN clause with parameterised placeholders
  if (categories.length > 0) {
    const placeholders = categories.map(() => '?').join(', ');
    sql += ` AND category IN (${placeholders})`;
    params.push(...categories);
  }

  // Price range filter
  if (minPrice > 0 || maxPrice < 999999) {
    sql += ' AND price >= ? AND price <= ?';
    params.push(minPrice, maxPrice);
  }

  // Rating filter — only apply when above the default minimum
  if (minRating > 1) {
    sql += ' AND rating >= ?';
    params.push(minRating);
  }

  // ── Sorting ──────────────────────────────────────────────────────
  const orderClause = SORT_MAP[sortBy] || SORT_MAP.default;
  sql += ` ORDER BY ${orderClause}`;

  // ── Execute ──────────────────────────────────────────────────────
  const products = db.prepare(sql).all(...params);

  // ── Build response with appliedFilters echo ──────────────────────
  const appliedFilters = {
    categories: categories.length > 0 ? categories : 'all',
    minPrice,
    maxPrice,
    minRating,
    sortBy,
  };

  return {
    products,
    count: products.length,
    appliedFilters,
  };
}

module.exports = { getFilteredProducts };
