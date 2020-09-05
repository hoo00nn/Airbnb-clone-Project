const Datastore = require('nedb')
const path = require('path');
let userDB = new Datastore();
let sessionDB = new Datastore();
let roomsDB = new Datastore({filename : path.join(__dirname, 'rooms')});

roomsDB.loadDatabase();

module.exports = {
  userDB,
  sessionDB,
  roomsDB
};
