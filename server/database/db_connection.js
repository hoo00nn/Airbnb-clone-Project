const Datastore = require('nedb')
const path = require('path');
let userDB = new Datastore({filename : path.join(__dirname, 'users')});
let sessionDB = new Datastore({filename : path.join(__dirname, 'sessions')});
let roomsDB = new Datastore({filename : path.join(__dirname, 'rooms')});

roomsDB.loadDatabase();
userDB.loadDatabase();
sessionDB.loadDatabase();

module.exports = {
  userDB,
  sessionDB,
  roomsDB
};
