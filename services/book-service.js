const {
  readAllBooks,
  insertBook,
  updateBookByIsbn,
} = require('../persistance/books-repository');

async function readAllBooksBy(filterType) {
  const bookItems = await readAllBooks(filterType);
  return bookItems;
}

async function requestBook(book) {
  const bookItem = await insertBook(book);
  return bookItem;
}

async function updateBook(isbn, bookInfo) {
  const bookItem = await updateBookByIsbn(isbn, bookInfo);
  return bookItem;
}

module.exports = {
  readAllBooksBy,
  requestBook,
  updateBook,
};
