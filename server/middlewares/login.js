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

const loginAuth = async (req, res) => {
  const correctEmail = await checkEmail(req.body.email);
  
  if (correctEmail) {
    const hashPassword = await getPassword(req.body.email);
    const correctPassword = await checkPassword(req.body.password, hashPassword);
    
    if (correctPassword) {
      const SID = session.encrypt();

      res.cookie('SID', SID);
      session.setSID(SID, req.body);
      return res.redirect('/');
    }
  }
  return res.send('<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다. 다시 시도해 주세요."); window.location.href="/"</script>"');
}

module.exports = { 
  loginAuth
};