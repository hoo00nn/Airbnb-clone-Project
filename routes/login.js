const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const {userDB} = require('../public/database/db');

router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views/login.pug'));
});

router.post('/form', (req, res) => {
  console.log(req.body);

  findUser(req.body)
  .then(data => {
    if (data.length !== 0) return res.json({result : "true"});
    return res.json({result : "false"});
  });
});

router.post('/logout', (req, res) => {

});

const findUser = function(info) {
  return new Promise((resolve, reject) => {
    userDB.find({id : info.id, pw : info.pw}, (err, docs) => {
      if (err) resolve(false);
      resolve(docs);
    });
  })
}

module.exports = router;