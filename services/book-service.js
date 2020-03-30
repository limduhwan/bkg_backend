const {
  readAllBooks,
} = require('../persistance/books-repository');

async function readAllBooksBy(filterType) {
  console.log('readAllBooksBy');
  const bookItems = await readAllBooks(filterType);
  return bookItems;
}

module.exports = {
  readAllBooksBy,
};
