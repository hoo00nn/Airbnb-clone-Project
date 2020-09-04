const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const {userDB, sessionDB} = require('../public/database/db');
const bcrypt = require('bcrypt');
const Session = require('../model/session');
let session = new Session();

router.post('/loginCheck', async (req, res) => {
  console.log(req.body);
  const correctEmail = await checkEmail(req.body.email);
  
  if (correctEmail) {
    const hashPassword = await getPassword(req.body.email);
    const correctPassword = await checkPassword(req.body.password, hashPassword);

    if (correctPassword) {
      const SID = session.encrypt();

      res.cookie('SID', SID);
      session.setSID(SID, req.body);
    }

    return res.redirect('/');
  }
  else {
    return res.redirect('/');
  }
});

router.get('/logout', (req, res) => {
  session.removeSession(req.cookies.SID);
  res.clearCookie('SID');
  return res.redirect('/');
});

const getPassword = (email) => {
  return new Promise(resolve => {
    userDB.find({email}, (err, result) => {
      resolve(result[0].password);
    });
  })
}

const checkPassword = (password, hash) => {
  return new Promise(resolve => {
    bcrypt.compare(password, hash, (err, isMatch) => {
      resolve(isMatch);
    })
  })
}

const checkEmail = (email) => {
  return new Promise(resolve => {
    userDB.find({email}, (err, result) => {
      if (result.length > 0) resolve(true)
      else resolve(false)
    })
  })
}

module.exports = router;