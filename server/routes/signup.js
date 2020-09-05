const express = require('express');
const router = express.Router();

const { signup } = require('../middlewares/signup');

router.post('/', signup);

module.exports = router;