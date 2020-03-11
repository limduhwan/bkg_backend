const express = require('express');
const router = express.Router();
const { readAllBooksBy } = require('../services/book-service');

router.get('/', (req, res) => res.send('Hello World!'))

router.get('/readAllBooksBy', async (req, res) => {

  console.log('readAllBooksBy');
  const bookItems = await readAllBooksBy();

  // console.log('bookItems' , bookItems);
  res.send({bookItems});
});

module.exports = router;
