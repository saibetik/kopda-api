const router = require('../app').router;
const authenticate = require('./user').authenticate;

router.post('/loans', authenticate, (req, res) => {
  res.json([
    {"loanID": 1, "contractNumber": "201801010922", "amountLimit": 25000000},
    {"loanID": 2, "contractNumber": "201801010932", "amountLimit": 15000000}
  ]);
});
