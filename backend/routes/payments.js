const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payments');

router.post('/register', paymentController.registerPayment);

module.exports = router;