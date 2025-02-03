const express = require('express');

const clothingItemsRoutes = require('./clothingItems');
const usersRoutes = require('./users');

const router = express.Router();

// home page
router.get('/', (req, res) => {
  res.send('Welcome API!');
});

// items
router.use('/items', clothingItemsRoutes);

// users
router.use('/users', usersRoutes);

// 404
router.use((req, res) => {
  console.log(404)
  res.status(404).send('404 - Page not found');
});

module.exports = router;