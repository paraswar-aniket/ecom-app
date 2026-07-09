const { query, validationResult } = require('express-validator');
const { getFilteredProducts } = require('../services/filterService');

// Allowed values for enums
const ALLOWED_CATEGORIES = [
  'Electronics',
  'Apparel',
  'Footwear',
  'Home & Kitchen',
  'Books',
  'Sports',
];

const ALLOWED_SORT = ['default', 'price_asc', 'price_desc', 'rating_desc'];

/**
 * Validation chain — runs before the handler.
 * Each rule is optional; defaults are applied in the service layer.
 */
const validateFilters = [
  query('categories')
    .optional()
    .customSanitizer((value) => {
      // Split comma-separated string into an array
      if (typeof value === 'string') return value.split(',').map((v) => v.trim());
      return value;
    })
    .custom((arr) => {
      if (!Array.isArray(arr)) return false;
      return arr.every((cat) => ALLOWED_CATEGORIES.includes(cat));
    })
    .withMessage(
      `Each category must be one of: ${ALLOWED_CATEGORIES.join(', ')}`
    ),

  query('minPrice')
    .optional()
    .toFloat()
    .isFloat({ min: 0 })
    .withMessage('minPrice must be a non-negative number'),

  query('maxPrice')
    .optional()
    .toFloat()
    .isFloat({ min: 0 })
    .withMessage('maxPrice must be a non-negative number'),

  query('minRating')
    .optional()
    .toInt()
    .isInt({ min: 1, max: 5 })
    .withMessage('minRating must be an integer between 1 and 5'),

  query('sortBy')
    .optional()
    .isIn(ALLOWED_SORT)
    .withMessage(`sortBy must be one of: ${ALLOWED_SORT.join(', ')}`),
];

/**
 * GET /api/products handler.
 * Validates query params → calls filterService → returns JSON envelope.
 */
function getProducts(req, res, next) {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array().map((e) => ({
          param: e.path,
          msg: e.msg,
        })),
      });
    }

    // Cross-field validation: minPrice must not exceed maxPrice
    const minPrice = req.query.minPrice !== undefined ? parseFloat(req.query.minPrice) : 0;
    const maxPrice = req.query.maxPrice !== undefined ? parseFloat(req.query.maxPrice) : 999999;

    if (minPrice > maxPrice) {
      return res.status(400).json({
        success: false,
        errors: [
          { param: 'minPrice', msg: 'minPrice must not be greater than maxPrice' },
        ],
      });
    }

    // Build filters object from validated query params
    const filters = {
      categories: req.query.categories || [],
      minPrice,
      maxPrice,
      minRating: req.query.minRating !== undefined ? parseInt(req.query.minRating, 10) : 1,
      sortBy: req.query.sortBy || 'default',
    };

    // Delegate to service layer
    const result = getFilteredProducts(filters);

    return res.json({
      success: true,
      count: result.count,
      products: result.products,
      appliedFilters: result.appliedFilters,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { validateFilters, getProducts };
