const express = require('express');

const router = express.Router();

// GET all workouts
router.get('/', (req, res) => {
  res.json({ mssg: 'Get all workouts' });
});

// GET a single workout
router.get('/:id', (req, res) => {
  res.json({ mssg: 'Get a single workout' });
});

// POST a workout
router.post('/', (req, res) => {
  res.json({ mssg: 'POST a new workout' });
});

// DELETE a workout
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'Delete a workout' });
});

// Update a workout
router.patch('/', (req, res) => {
  res.json({ mssg: 'Update a workout' });
});

module.exports = router;
