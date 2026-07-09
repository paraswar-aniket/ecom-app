/**
 * Centralised error-handling middleware.
 * Catches any unhandled errors (DB failures, unexpected exceptions)
 * and returns a clean 500 response.
 *
 * In development mode, the full stack trace is logged to the console.
 */
function errorHandler(err, req, res, _next) {
  // Log stack trace in development
  if (process.env.NODE_ENV !== 'production') {
    console.error('❌ Unhandled error:', err.stack || err);
  }

  res.status(500).json({
    success: false,
    error: 'Internal server error',
  });
}

module.exports = errorHandler;
