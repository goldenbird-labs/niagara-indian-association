const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM members ORDER BY created_at DESC');
    const members = stmt.all();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', (req, res) => {
  const { first_name, last_name, email, phone, city, membership_type, interests, how_heard, message } = req.body;

  if (!first_name || !last_name || !email) {
    return res.status(400).json({ error: 'First name, last name, and email are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  try {
    const stmt = db.prepare(`
      INSERT INTO members (first_name, last_name, email, phone, city, membership_type, interests, how_heard, message)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(
      first_name.trim(),
      last_name.trim(),
      email.trim().toLowerCase(),
      phone || null,
      city || null,
      membership_type || 'individual',
      Array.isArray(interests) ? interests.join(', ') : (interests || null),
      how_heard || null,
      message || null
    );
    res.status(201).json({ id: Number(result.lastInsertRowid), message: 'Welcome to NIA! Your membership has been registered.' });
  } catch (err) {
    if (err.message && err.message.includes('UNIQUE constraint failed')) {
      return res.status(409).json({ error: 'A member with this email already exists.' });
    }
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
});

router.get('/count', (req, res) => {
  try {
    const stmt = db.prepare('SELECT COUNT(*) as count FROM members');
    const result = stmt.get();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
