require('dotenv').config();

const express = require('express');
const workoutRoutes = require('./routes/workouts');

// express app
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
