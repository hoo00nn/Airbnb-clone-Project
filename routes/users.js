const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/login', (req, res) => {
  res.render(path.join(__dirname, '../views/login.pug'));
})

module.exports = router;
