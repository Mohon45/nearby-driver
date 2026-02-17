const express = require('express');
const { requestRide } = require('../controllers/ride.controller');

const router = express.Router();

router.post('/request', requestRide);

module.exports = router;
