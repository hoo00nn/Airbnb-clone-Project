const express = require('express');
const router = express.Router();
const login = require('./login');
const logout = require('./logout');
const signup = require('./signup');
const rooms = require('./rooms');

router.use('/login', login);
router.use('/logout', logout);
router.use('/signup', signup);
router.use('/rooms', rooms);

module.exports = router;