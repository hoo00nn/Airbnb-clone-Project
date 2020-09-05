const {userDB} = require('../database/db_connection'); 
const bcrypt = require('bcrypt');
const Session = require('../model/session');
const session = new Session();

const checkEmail = (email) => {
  return new Promise(resolve => {
    userDB.find({email : email}, (err, result) => {
      if (result.length > 0) resolve(true)
      else resolve(false)
    })
  })
}

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

const loginAuth = async (req, res, next) => {
  const correctEmail = await checkEmail(req.body.email);
  
  if (correctEmail) {
    const hashPassword = await getPassword(req.body.email);
    const correctPassword = await checkPassword(req.body.password, hashPassword);
    
    if (correctPassword) {
      const SID = session.encrypt();

      res.cookie('SID', SID);
      session.setSID(SID, req.body);
    }

    next();
  }
  else {
    next();
  }
}

module.exports = { 
  loginAuth
};