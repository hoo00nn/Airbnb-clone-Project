const express = require('express');
const router = express.Router();

const { reservation } = require('../middlewares/reservation');

router.post('/', reservation);

module.exports = router;