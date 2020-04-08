const express = require('express');
const router = express.Router();
const { readAllBooksBy, requestBook, updateBook } = require('../services/book-service');

router.get('/', (req, res) => res.send('Hello World!'))

router.get('/readAllBooksBy/:filterType', async (req, res) => {

  const { filterType } = req.params;
  const bookItems = await readAllBooksBy(filterType);

  res.send({bookItems});
});

router.post('/books', async (req, res) => {
  let data = '';

  req.on('data', function (chunk) {
    data += chunk;
  });

  req.on('end', async function () {

    const result = await requestBook(data);

    res.writeHead(200, {
      'Content-Type': 'text/json'
    });
    res.write(JSON.stringify(data));
    res.end();
  });
});

router.put('/books/:isbn', async (req, res) => {

  const { isbn } = req.params;
  let data = '';

  req.on('data', function (chunk) {
    data += chunk;
  });

  req.on('end', async function () {
    const result = await updateBook(isbn, data);

    res.writeHead(200, {
      'Content-Type': 'text/json'
    });
    // res.write(JSON.stringify(data));
    res.end();
  });
});

module.exports = router;
