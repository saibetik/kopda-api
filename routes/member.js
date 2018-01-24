const router = require('../app').router;
const authenticate = require('./user').authenticate;

router.post('/members', authenticate, (req, res) => {
  res.json([
    {"memberID": 1, "memberName": "Kristianto Lie", "cardNumber": "02029", "workUnit": "BAPEDA"},
    {"memberID": 2, "memberName": "Rahmat Gozali", "cardNumber": "02012", "workUnit": "BAPEDA"}
  ]);
});
