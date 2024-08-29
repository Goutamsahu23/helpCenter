const Card = require('../models/Card');
require('dotenv').config();

// Create a new card
exports.createCard = async (req, res) => {
  try {
    const { title, description, link } = req.body;


    if (!title || !description || !link) {
      return res.status(400).send({ error: 'All fields are required.' });
    }


    const existingCard = await Card.findOne({ title });
    if (existingCard) {
      return res.status(409).send({ error: 'A card with this title already exists.' });
    }

    const card = new Card({ title, description, link });
    await card.save();
    res.status(201).send(card);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return res.status(400).send({ error: err.message });
    }
    res.status(500).send({ error: 'Server error. Please try again later.' });
  }
};

// Get all cards
exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.send(cards);
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch cards. Please try again later.' });
  }
};

// Get a specific card by title
exports.getCardByTitle = async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });


    if (!card) {
      return res.status(404).send({ error: 'Card not found.' });
    }

    res.send(card);
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch the card. Please try again later.' });
  }
};
