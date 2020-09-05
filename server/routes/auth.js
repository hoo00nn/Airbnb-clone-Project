const express = require('express');
const router = express.Router();
const Session = require('../model/session');
let session = new Session();
const { loginAuth } = require('../middlewares/auth');


router.post('/loginCheck', loginAuth, (req, res) => {
  return res.redirect('/');
});

router.get('/logout', (req, res) => {
  session.removeSession(req.cookies.SID);
  res.clearCookie('SID');
  return res.redirect('/');
});

module.exports = router;