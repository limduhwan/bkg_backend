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

module.exports = {
  readAllBooks,
};
