const express = require('express');
const router = express.Router();

const { reservation, renderReservationPage } = require('../middlewares/reservation');

router.post('/', reservation);
router.get('/', renderReservationPage);

module.exports = router;