const express = require('express');
const cors = require('cors');
const path = require('path');
const membersRouter = require('./routes/members');

const app = express();
const PORT = process.env.PORT || 3001;
const isProd = process.env.NODE_ENV === 'production' || process.env.RAILWAY_ENVIRONMENT;

app.use(cors({
  origin: isProd ? '*' : 'http://localhost:5173',
}));
app.use(express.json());

// API routes (must come before static/catch-all)
app.use('/api/members', membersRouter);
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'NIA API running' });
});

// Serve built React app in production
const clientDist = path.join(__dirname, '../client/dist');
app.use(express.static(clientDist));

// SPA fallback — send index.html for any non-API route
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NIA Server running on http://localhost:${PORT}`);
});
