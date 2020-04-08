const { BOOK } = require('./collections');
const { getDB } = require('../lib/database-manager');

function items() {
  return getDB().collection(BOOK);
}

async function readAllBooks(filterType) {
  let bookItems;
  if (filterType === '전체') {
    bookItems = await items().find({}).toArray();
  } else {
    bookItems = await items().find({status: filterType}).toArray();
  }

  return bookItems;
}

async function insertBook(book) {
  return items().insertOne(JSON.parse(book));
}

async function updateBookByIsbn(isbn, bookInfo) {
  const bookData = JSON.parse(bookInfo);

  return await items().updateOne(
      { isbn },
      { $set: { updatedDate: bookData.updatedDate,  status: bookData.status} },
  );
}

module.exports = {
  readAllBooks,
  insertBook,
  updateBookByIsbn,
};
