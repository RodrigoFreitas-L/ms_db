require('dotenv').config();
const app = require('./app');
const Loaders = require('./models');

const port = process.env.PORT || 3001;

Loaders.start();

app.listen(port, () => console.log('Listening on port', port));