const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: '/config.env' });

// Get in Development Envierenment(variable)
console.log(process.env.NODE_ENV);

// START SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
