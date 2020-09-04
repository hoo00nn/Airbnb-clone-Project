const {sessionDB} = require('../database/db');

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

  sessionCheck = (SID) => {
    return new Promise((resolve, reject) => {
      sessionDB.find({SID : SID}, (err, isMatch) => {
        if (isMatch.length > 0) resolve(true);
        else resolve(false);
      })
    })
  }
}

module.exports = Session;