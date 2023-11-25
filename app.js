const express = require('express');

const app = express();

// http მეთოდი
app.get('/', (req, res) => {
  res
    .status(404)
    .json({ message: 'Hello From the server side!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.end('This is post method');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
