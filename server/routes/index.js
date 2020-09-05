const express = require('express');
const router = express.Router();
const login = require('./login');
const logout = require('./logout');
const signup = require('./signup');

const test = require('./test');
router.use('/test', test);

router.use('/login', login);
router.use('/logout', logout);
router.use('/signup', signup);

module.exports = router;