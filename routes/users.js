const express = require('express');

const router = express.Router();

// GET /users
router.get('/', (req, res) => {
  console.log(3);
  res.send('List of users');
});

// GET /users/:userId
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  // res.json({ message: `User with ID: ${userId}` });
  res.send(`User ${userId} returned`);
});

// POST /users
router.post('/', (req, res) => {
  console.log(4);
  res.send('User created');
});

module.exports = router;