const { BOOK } = require('./collections');
const { getDB } = require('../lib/database-manager');

function items() {
  return getDB().collection(BOOK);
}

async function readAllBooks(filterType) {
  let bookItems;
  if (filterType === 'ALL') {
    console.log('filterType   ', filterType);
    bookItems = await items().find({}).toArray();
  } else {
    console.log('filterType   ', filterType);
    bookItems = await items().find({status: filterType}).toArray();
  }

  console.log('bookItems', bookItems);

  return bookItems;
}

async function insertBook(book) {
  console.log('insertBook', book);
  return items().insertOne(JSON.parse(book));
}

module.exports = {
  readAllBooks,
  insertBook,
};
