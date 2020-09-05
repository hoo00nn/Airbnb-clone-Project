const express = require('express');
const router = express.Router();

const { clearAll } = require('../middlewares/logout');

router.get('/', clearAll, (req, res) => {
  return res.redirect('/');
});

module.exports = router;