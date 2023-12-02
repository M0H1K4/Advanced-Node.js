const dotenv = require('dotenv');
dotenv.config({ path: '/config.env' });

const app = require('./app');

// Get in Development Envierenment(variable)
// console.log(process.env.NODE_ENV);

// START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

