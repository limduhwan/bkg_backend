const { BOOK } = require('./collections');
const { getDB } = require('../lib/database-manager');

function items() {
  return getDB().collection(BOOK);
}

async function readAllBooks() {
  const bookItems = await items().find({}).toArray();

  console.log('bookItems', bookItems);

  return bookItems;
}

module.exports = {
  readAllBooks,
};
