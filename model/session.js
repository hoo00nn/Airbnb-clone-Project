const {sessionDB} = require('../public/database/db');

class Session {
  encrypt = () => {
    const CHAR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array(50).join().split(',').map(function() { return CHAR.charAt(Math.floor(Math.random() * CHAR.length));}).join('');
  }

  removeSession = (SID) => {
    sessionDB.remove({SID : SID}, {}, (err, removed) => {});
  }

  setSID = (hash, info) => {
    sessionDB.insert({SID : hash, email : info.email});
  }

  sessionCheck = (cookie) => {
    return new Promise((resolve, reject) => {
      sessionDB.find({SID : cookie.SID}, (err, docs) => {
        if (err) resolve(false);
        resolve(docs);
      })
    })
  }
}

module.exports = Session;