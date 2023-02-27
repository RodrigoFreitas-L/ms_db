const mongoose = require('mongoose');
require('dotenv').config();

const uri = 'mongodb://mongodb:27017/monster_strike_db?authSource=admin'

const options = {
  user: process.env.MONGO_USER,
  pass: process.env.MONGO_PWD,
};

const startDB = () => {
  mongoose.connect(uri, options)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err));
}

module.exports = startDB