const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
const saltRounds = 5;
const {userDB, sessionDB} = require('../database/db_connection');

router.post('/', async (req, res) => {
  const emailValidation = await emailCheck(req.body.email);
  
  if (emailValidation) {
    const hash = await bcryptPassword(req.body.password);
    req.body.password = hash;
    createUser(req.body);
    return res.redirect('/');
  }
  else return res.json({result : 'false'});
})

const createUser = function(info) {
  userDB.insert(info, (err, doc) => {
    if (err) console.log('Create User Fail...');
    else console.log('Create User!!');
  })
}

const emailCheck = (email) => {
  return new Promise(resolve => {
    userDB.find({email}, (err, result) => {
      if (result.length > 0) resolve(false);
      else resolve(true);
    })
  })
}

const bcryptPassword = (password) => {
  return new Promise(resolve => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        resolve(hash);
      })
    })
  })
}

module.exports = router;