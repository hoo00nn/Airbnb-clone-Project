const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const {userDB, sessionDB} = require('../public/database/db');

router.get('/', (req, res) => {
  return res.render(path.join(__dirname, '../views/register.pug'));
})

router.post('/signup', (req, res) => {
  createUser(req.body);
  return res.redirect('/auth/login');
})

createUser = function(info) {
  userDB.insert(info, (err, doc) => {
    if (err) console.log('Create User Fail...');
    else console.log('Create User!!');
  })
}

module.exports = router;