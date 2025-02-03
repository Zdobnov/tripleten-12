const express = require('express');

const router = express.Router();

// GET /items
router.get('/', (req, res) => {
  console.log(1);
  res.send('List of clothing items');
});

// GET /items/:itemId
router.get('/:itemId', (req, res) => {
  const { itemId } = req.params;

  res.send(`Item ${itemId} returned`);
});

// POST /items
router.post('/', (req, res) => {
  console.log(2);
  res.send('Clothing item created');
});

module.exports = router;