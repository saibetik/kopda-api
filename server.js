const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json(['Kopda API service']);
});

app.get('/api/members', (req, res) => {
  res.json([
    {"memberID": 1, "memberName": "Kristianto Lie", "cardNumber": "02029", "workUnit": "BAPEDA"},
    {"memberID": 2, "memberName": "Rahmat Gozali", "cardNumber": "02012", "workUnit": "BAPEDA"}
  ]);
});

app.get('/api/loans', (req, res) => {
  res.json([
    {"loanID": 1, "contractNumber": "201801010922", "amountLimit": 25000000},
    {"loanID": 2, "contractNumber": "201801010932", "amountLimit": 15000000}
  ]);
});

// app.set('SERVER_PORT', process.env.OPENSHIFT_NODEJS_PORT || 3000);
// app.set('SERVER_IP', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

app.listen(8080, '0.0.0.0', () => {
  console.log('kopda-api is running');
})
