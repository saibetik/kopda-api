const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json(['Hello World!']);
});

app.listen(3000, () => {
    console.log('kopda-api listening on port 3000!');
})
