import express from 'express';
import { addContact, getContacts } from '../db/database.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, service, budget, message } = req.body;

    if (!name || !email || !service || !budget || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const contact = await addContact({ name, email, service, budget, message });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      id: contact.id,
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

router.get('/contacts', async (req, res) => {
  try {
    const contacts = await getContacts();
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

export default router;
