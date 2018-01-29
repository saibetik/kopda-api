const jwt = require('jsonwebtoken');
const config = require('../app').config;
const router = require('../app').router;
const User = require('../models/user');

const tokenFromHeader = (req) => {
  if (req.headers.authorization) {
    return req.headers.authorization.replace(/Bearer\s+([\w\.]+)/, '$1')
  } else {
    return null;
  }
};

const createNewToken = (req) => {
  const payload = {username: req.body.username, passwordHash: req.body.passwordHash};
  return jwt.sign(payload, config.app.secret, {expiresIn: '1h'});
};

const authenticate = (req, res, next) => {
  if (req.headers.authorization) {
    jwt.verify(tokenFromHeader(req), config.app.secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({error: 401, message: 'Unauthorized access.'});
      } else {
        next();
      }
    });
  } else {
    return res.status(400).json({error: 400, message: 'Bad request.'});
  }
};

router.post('/user/info', authenticate, (req, res) => {
  User.listAllUsers().then((users) => {
    res.json({users});
  }).catch((err) => {
    res.status(503).json({error: 503, message: err});
  });
});

router.post('/user/new', authenticate, (req, res) => {
  User.createNewUser(req.body).then((user) => {
    res.json({user});
  }).catch((err) => {
    res.status(503).json({error: 503, message: err});
  });
});

router.post('/user/login', (req, res) => {
  if (req.body.username && req.body.password) {
    res.json({error: 0, token: createNewToken(req)});
  } else {
    res.status(401).json({error: 400, message: 'Bad request.'});
  }
});

module.exports = {authenticate};
