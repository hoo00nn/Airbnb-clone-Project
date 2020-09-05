const express = require('express');
const router = express.Router();

const { getOptionRooms } = require('../middlewares/rooms');

router.get('/', getOptionRooms);

module.exports = router;