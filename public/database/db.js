const path = require('path');
let Datastore = require('nedb')
let userDB = new Datastore({filename : path.join(__dirname, '/userDB'), autoload : true});
let sessionDB = new Datastore({filename : path.join(__dirname, '/sessionDB'), autoload : true});

module.exports = {userDB, sessionDB};
