const express = require('express');
const router = require('./router');

const app = express();

app.get('/', (req, res) => {
  res.json(['Kopda API service']);
});

app.get('/health', (req, res) => {
  res.json(['Kopda API is ready to serve requests']);
});

app.use('/api', router);

app.listen(8080, '0.0.0.0', () => {
  console.log('kopda-api is running');
})
