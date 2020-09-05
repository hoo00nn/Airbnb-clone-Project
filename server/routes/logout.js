const express = require('express');
const router = express.Router();

const { clearAll } = require('../middlewares/logout');

router.get('/', clearAll);

module.exports = router;