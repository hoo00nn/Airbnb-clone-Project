const express = require('express');
const router = express.Router();

const reservation = require('./reservaion');

router.use('/reservation', reservation);

module.exports = router;