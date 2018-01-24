const jwt = require('jsonwebtoken');
const router = require('../app').router;

const authenticate = (req, res, next) => {
  if (req.headers['x-access-token']) {
    jwt.verify(req.headers['x-access-token'], 'secret', (err, decoded) => {
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
    res.json({
      error: 0,
      token: jwt.sign({username: req.body.username, password: req.body.password}, 'secret', {expiresIn: '1h'})
    });
  } else {
    res.status(401).send({error: 400, message: 'Bad request.'});
  }
});

module.exports = {authenticate};
