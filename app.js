const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = {
  app: {
    secret: process.env.SECRET_KEY || 'secret',
    port: process.env.SERVER_PORT || 8080,
    host: process.env.SERVER_IP || '0.0.0.0'
  },
  db: {
    host: process.env.MONGODB_HOST || 'localhost',
    database: process.env.MONGODB_DATABASE || 'kopda',
    user: process.env.MONGODB_USER || 'kopda',
    pwd: process.env.MONGODB_PASSWORD || 'password'
  }
};

mongoose.connect(`mongodb://${config.db.user}:${config.db.pwd}@${config.db.host}/${config.db.database}`);

const router = express.Router();
router.use(bodyParser.json());

module.exports = {
  config,
  router
};
