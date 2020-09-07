const express = require('express');
const router = express.Router();

const { loginAuth } = require('../middlewares/login');

router.post('/', loginAuth);

module.exports = router;