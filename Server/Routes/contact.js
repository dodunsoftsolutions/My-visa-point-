import express from 'express';
import Contact from '../model/contactSchema.js';

const router = express.Router();

// POST route to handle form submission
router.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact document and save it to the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
  }
});

// GET route to fetch all contact data
router.get('/all', async (req, res) => {
  try {
    // Fetch all documents from the Contact collection
    const contacts = await Contact.find({});
    res.status(200).json({ success: true, contacts });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch contacts. Please try again.' });
  }
});

export default router;
