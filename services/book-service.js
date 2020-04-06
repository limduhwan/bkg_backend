const {
  readAllBooks,
  insertBook,
} = require('../persistance/books-repository');

async function readAllBooksBy(filterType) {
  console.log('readAllBooksBy');
  const bookItems = await readAllBooks(filterType);
  return bookItems;
}

async function requestBook(book) {
  // console.log('requestBook', book);
  const bookItem = await insertBook(book);
  return bookItem;
}

module.exports = {
  readAllBooksBy,
  requestBook,
};
