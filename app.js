const express = require('express');
const fs = require('fs');

const app = express();

// middleware || in the middle of req and res
app.use(express.json())

// http მეთოდი
// app.get('/', (req, res) => {
//   res
//     .status(404)
//     .json({ message: 'Hello From the server side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.end('This is post method');
// });

///////////////////////////////////////////////////////////

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// jsent data spasipication
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'succes',
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.post('/api/v1/tours' , (req, res)  => {
  console.log(req.body);
  res.send('Done!')
})

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
