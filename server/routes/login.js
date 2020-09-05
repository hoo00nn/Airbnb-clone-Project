const express = require('express');
const router = express.Router();

const { loginAuth } = require('../middlewares/auth');

router.post('/', loginAuth, (req, res) => {
  return res.redirect('/');
});

module.exports = router;