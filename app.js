const express = require('express');
const bodyParser = require('body-parser');

const config = {
  secret: process.env.SECRET_KEY || 'secret',
  port: process.env.SERVER_PORT || 8080,
  host: process.env.SERVER_IP || '0.0.0.0'
};

const router = express.Router();
router.use(bodyParser.json());

module.exports = {
  config,
  router
};
