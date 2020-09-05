const express = require('express');
const router = express.Router();
const login = require('./login');
const logout = require('./logout');
const signup = require('./signup');

router.use('/login', login);
router.use('/logout', logout);
router.use('/signup', signup);

module.exports = router;