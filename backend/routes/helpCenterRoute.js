const express = require('express');
const router = express.Router();
const {getCards,getCardByTitle,createCard} =require('../controllers/helpCenter')

router.post('/cards',createCard);
router.get('/cards',getCards)
router.get('/cards/:title',getCardByTitle);

module.exports = router;