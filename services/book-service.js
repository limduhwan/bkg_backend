const {
  readAllBooks,
} = require('../persistance/books-repository');

async function readAllBooksBy() {
  console.log('readAllBooksBy');
  const bookItems = await readAllBooks();
  return bookItems;
}

module.exports = {
  readAllBooksBy,
};
