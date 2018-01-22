const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json(['Hello World!']);
});

// app.set('SERVER_PORT', process.env.OPENSHIFT_NODEJS_PORT || 3000);
// app.set('SERVER_IP', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

app.listen(8080, '0.0.0.0', () => {
  console.log('kopda-api listening on port 8080');
})
