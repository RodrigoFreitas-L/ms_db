const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const errorController = require('./errors/errorController');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  mongoSanitize({
    onSanitize: ({ req, key }) => {
      console.warn(`This request[${key}] is sanitized`, req);
    },
  }),
);
app.use(routes);
app.use(errorController);

module.exports = app;