const config = require('config');
const { MongoClient } = require('mongodb');
// const collections = require('../persistance/collections');
const uri = config.get('dbConfig.uri');
const dbName = config.get('dbConfig.dbName');

let db;

function createCollections(db) {
  //Object.keys(collections).forEach((collection) => db.collection(collection));
}

function connect() {
  console.log('Connecting......', uri, dbName);
  MongoClient.connect(uri, { useUnifiedTopology: true })
    .then((client) => {
      console.log('Connection to DB successful');
      db = client.db(dbName);

      createCollections(db);
    }).catch((err) => {
    console.error(err, 'Fail Connection to DB');
    if (process.env.NODE_ENV === 'development') {
      console.log('please, read README.md');
    }
  });
}

function disconnect() {
  if (db) {
    db.close();
  }
}

function getDB() {
  return db;
}

module.exports = {
  connect,
  disconnect,
  getDB,
};
