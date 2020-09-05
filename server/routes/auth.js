const express = require('express');
const router = express.Router();

const { clearAll } = require('../middlewares/logout');
const { loginAuth } = require('../middlewares/auth');


router.post('/loginCheck', loginAuth, (req, res) => {
  return res.redirect('/');
});

router.get('/logout', clearAll, (req, res) => {
  return res.redirect('/');
});

module.exports = router;