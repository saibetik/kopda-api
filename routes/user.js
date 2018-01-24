const jwt = require('jsonwebtoken');
const config = require('../app').config;
const router = require('../app').router;

const tokenFromHeader = (req) => {
  if (req.headers.authorization) {
    return req.headers.authorization.replace(/Bearer\s+([\w\.]+)/, '$1')
  } else {
    return null;
  }
};

const createNewToken = (req) => {
  const payload = {username: req.body.username, passwordHash: req.body.passwordHash};
  return jwt.sign(payload, config.secret, {expiresIn: '1h'});
};

const authenticate = (req, res, next) => {
  if (req.headers.authorization) {
    jwt.verify(tokenFromHeader(req), config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({error: 401, message: 'Unauthorized access.'});
      } else {
        next();
      }
    });
  } else {
    return res.status(400).send({error: 400, message: 'Bad request.'});
  }
};

router.post('/user/info', authenticate, (req, res) => {
  res.json(req.body);
});

router.post('/user/login', (req, res) => {
  if (req.body.username && req.body.password) {
    res.json({error: 0, token: createNewToken(req)});
  } else {
    res.status(401).send({error: 400, message: 'Bad request.'});
  }
});

module.exports = {authenticate};
