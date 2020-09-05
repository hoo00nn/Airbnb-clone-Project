const express = require('express');
const router = express.Router();

const { signup } = require('../middlewares/signup');

router.post('/', signup, (req, res) => {
  return res.redirect('/');
})

module.exports = router;