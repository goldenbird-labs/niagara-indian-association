const express = require('express');
const cors = require('cors');
const membersRouter = require('./routes/members');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/members', membersRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'NIA API running' });
});

app.listen(PORT, () => {
  console.log(`NIA Server running on http://localhost:${PORT}`);
});
