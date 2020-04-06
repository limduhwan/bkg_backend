const express = require('express');
const router = express.Router();
const { readAllBooksBy, requestBook } = require('../services/book-service');

router.get('/', (req, res) => res.send('Hello World!'))

router.get('/readAllBooksBy/:filterType', async (req, res) => {

  console.log('readAllBooksBy');
  const { filterType } = req.params;
  const bookItems = await readAllBooksBy(filterType);

  // console.log('bookItems' , bookItems);
  res.send({bookItems});
});

router.post('/books', async (req, res) => {
  let data = '';

  req.on('data', function (chunk) {
    data += chunk;
  });

  req.on('end', async function () {
    // console.log('POST data received', data);

    const result = await requestBook(data);

    console.log('result', result);
    res.writeHead(200, {
      'Content-Type': 'text/json'
    });
    res.write(JSON.stringify(data));
    res.end();
  });
});

router.put('/books/:isbn', async (req, res) => {

  console.log('update book', req.params);
  const { isbn } = req.params;

  console.log('update book isbn', isbn);
  // const bookItems = await readAllBooksBy(filterType);

  // console.log('bookItems' , bookItems);
  // res.send({bookItems});
});

module.exports = router;
