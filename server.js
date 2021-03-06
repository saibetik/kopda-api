const express = require('express');
const router = require('./router');
const config = require('./app').config;

const app = express();

app.get('/', (req, res) => {
  res.json(['Kopda API service']);
});

app.get('/health', (req, res) => {
  res.json(['Kopda API is ready to serve requests']);
});

app.use('/api', router);

app.listen(config.app.port, config.app.host, () => {
  console.log(`kopda-api is running on ${config.app.host}:${config.app.port}`);
})
