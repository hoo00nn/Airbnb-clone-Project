const Datastore = require('nedb')
const path = require('path');
let userDB = new Datastore({filename : path.join(__dirname, 'users')});
let sessionDB = new Datastore({filename : path.join(__dirname, 'sessions')});
let roomsDB = new Datastore({filename : path.join(__dirname, 'rooms')});
let reservationDB = new Datastore({filename : path.join(__dirname, 'reservation')});

roomsDB.loadDatabase();
userDB.loadDatabase();
sessionDB.loadDatabase();
reservationDB.loadDatabase();

module.exports = {
  userDB,
  sessionDB,
  roomsDB,
  reservationDB
};
