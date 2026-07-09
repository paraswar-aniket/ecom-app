// Load environment variables first
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { initDatabase } = require('./config/db');
const productRoutes = require('./routes/products');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 5000;

// ── Initialise database (schema + seed on first run) ───────────────
initDatabase();

// ── Middleware ──────────────────────────────────────────────────────
app.use(cors({ origin: 'http://localhost:5173' })); // Vite dev server
app.use(express.json());

// ── Routes ─────────────────────────────────────────────────────────
app.use('/api', productRoutes);

// Health check / root route
app.get('/', (req, res) => {
  res.json({ message: 'Server running', status: 'ok' });
});

// ── (Optional) Serve React production build as static files ────────
// Uncomment the following lines when deploying with a built frontend:
// const path = require('path');
// app.use(express.static(path.resolve(__dirname, '../client/dist')));
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
// });

// ── Centralised error handler (must be registered last) ────────────
app.use(errorHandler);

// ── Start server ───────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoint: http://localhost:${PORT}/api/products`);
});
