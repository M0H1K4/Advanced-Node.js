
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
// 1) MIDDLEWARES || morgan is 3rd part Middleware
app.use(morgan('dev'));

app.use(express.json());

// how to create my own middleware
app.use((req, res, next) => {
  console.log('Hello from the middleware 🤣');
  next();
});
// Defining Request Time
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
