const express = require('express');
const { getPlants } = require('./plants');

const app = express();
const port = 3000;

app.get('/plants', (req, res) => {
  const result = getPlants();
  res.send(result);
});

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log('Pai ta on!'));