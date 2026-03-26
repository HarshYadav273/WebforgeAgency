import express from 'express';
import db from '../db/database.js';

const router = express.Router();

router.post('/contact', (req, res) => {
  try {
    const { name, email, service, budget, message } = req.body;

    if (!name || !email || !service || !budget || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const stmt = db.prepare(
      'INSERT INTO contacts (name, email, service, budget, message) VALUES (?, ?, ?, ?, ?)'
    );
    const result = stmt.run(name, email, service, budget, message);

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      id: result.lastInsertRowid,
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

router.get('/contacts', (req, res) => {
  try {
    const contacts = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all();
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

export default router;
