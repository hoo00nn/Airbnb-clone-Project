const path = require('path');
let Datastore = require('nedb')
let userDB = new Datastore();
let sessionDB = new Datastore();

module.exports = {userDB, sessionDB};
