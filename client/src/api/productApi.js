import axios from 'axios';

// Axios instance — baseURL points to the Vite proxy
const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

/**
 * Fetch products from the backend with filter/sort params.
 *
 * @param {Object} params
 * @param {string[]} [params.categories] - Selected category names
 * @param {number}   [params.minPrice]   - Lower price bound
 * @param {number}   [params.maxPrice]   - Upper price bound
 * @param {number}   [params.minRating]  - Minimum star rating (1–5)
 * @param {string}   [params.sortBy]     - Sort order key
 * @param {AbortSignal} [signal]         - AbortController signal for cancellation
 * @returns {Promise<Object[]>} Array of product objects
 */
export async function fetchProducts(params = {}, signal) {
  const { categories = [], minPrice, maxPrice, minRating, sortBy } = params;

  // Build query parameters
  const queryParams = {};

  if (categories.length > 0) {
    queryParams.categories = categories.join(',');
  }
  if (minPrice !== undefined && minPrice > 0) {
    queryParams.minPrice = minPrice;
  }
  if (maxPrice !== undefined && maxPrice < 2000) {
    queryParams.maxPrice = maxPrice;
  }
  if (minRating !== undefined && minRating > 1) {
    queryParams.minRating = minRating;
  }
  if (sortBy && sortBy !== 'default') {
    queryParams.sortBy = sortBy;
  }

  const response = await api.get('/products', {
    params: queryParams,
    signal,
  });

  return response.data;
}

export default api;
