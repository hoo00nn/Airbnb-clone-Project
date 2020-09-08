const express = require('express');
const router = express.Router();
const login = require('./login');
const logout = require('./logout');
const signup = require('./signup');
const rooms = require('./rooms');
const reservation = require('./reservation');

router.use('/login', login);
router.use('/logout', logout);
router.use('/signup', signup);
router.use('/rooms', rooms);
router.use('/reservation', reservation);

module.exports = router;