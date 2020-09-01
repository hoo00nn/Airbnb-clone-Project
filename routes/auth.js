const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const {userDB, sessionDB} = require('../public/database/db');

router.get('/login', (req, res) => {
  sessionCheck(req.cookies)
  .then(data => {
    if (data.length !== 0) {
      return res.render(path.join(__dirname, '../views/login.pug'), {id : data[0].id});
    }
    return res.render(path.join(__dirname, '../views/login.pug',));
  });
});

router.post('/loginCheck', (req, res) => {
  findUser(req.body)
  .then(data => {
    if (data.length !== 0) {
      let hash = encrypt();
      res.cookie('SID', hash);
      setSID(hash, req.body);
    }
    return res.redirect('/auth/login');
  });
});

router.post('/logout', (req, res) => {
  removeSession(req.cookies.SID);
  res.clearCookie('SID');
  return res.redirect('/auth/login');
});

const findUser = function(info) {
  return new Promise((resolve, reject) => {
    userDB.find({id : info.id, pw : info.pw}, (err, docs) => {
      if (err) resolve(false);
      resolve(docs);
    });
  })
}

const sessionCheck = function(cookie) {
  return new Promise((resolve, reject) => {
    sessionDB.find({SID : cookie.SID}, (err, docs) => {
      if (err) resolve(false);
      resolve(docs);
    })
  })
}

const setSID = function(hash, info) {
  sessionDB.insert({SID : hash, id : info.id});
}

const removeSession = function(SID) {
  sessionDB.remove({SID : SID}, {}, (err, removed) => {});
}

const encrypt = function() {
  const CHAR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array(50).join().split(',').map(function() { return CHAR.charAt(Math.floor(Math.random() * CHAR.length));}).join('');
}

module.exports = router;