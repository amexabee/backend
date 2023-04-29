const express = require('express');

// express app
const app = express();

app.get('/', (req, res) => {
  res.json({ mssg: 'hi' });
});

// listen for requests
app.listen(4000, () => {
  console.log('listening on port 4000');
});
