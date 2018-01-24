const bodyParser = require('body-parser');
const router = require('express').Router();

router.use(bodyParser.json());

module.exports = {router};
