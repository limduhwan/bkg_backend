const express = require('express');
const router = express.Router();
const { readAllBooksBy } = require('../services/book-service');

router.get('/', (req, res) => res.send('Hello World!'))

router.get('/readAllBooksBy/:filterType', async (req, res) => {

  console.log('readAllBooksBy');
  const { filterType } = req.params;
  const bookItems = await readAllBooksBy(filterType);

  // console.log('bookItems' , bookItems);
  res.send({bookItems});
});

router.post('/books', (req, res) => {
  // console.log('books req.body.book', req.body);
  // console.log('books req.params', req.params);
  //
  // const { book } = req.params;
  //
  // console.log('book ', book);
  // // const isNewBoard = await createBoard(boardId);
  // // res.send({ isNewBoard });
  // const item = {};
  // res.send(item);

  let data = '';

  req.on('data', function (chunk) {
    data += chunk;
  });

  req.on('end', function () {
    console.log('POST data received');
    res.writeHead(200, {
      'Content-Type': 'text/json'
    });
    res.write(JSON.stringify(data));
    res.end();
  });
});

module.exports = router;
