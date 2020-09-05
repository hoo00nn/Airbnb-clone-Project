const express = require('express');
const router = express.Router();
const auth = require('./auth');
const register = require('./register');

router.use('/auth', auth);
router.use('/register', register);

module.exports = router;