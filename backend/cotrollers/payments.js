const Payment = require('../models/Payment');

// Register payment
exports.registerPayment = async (req, res) => {
    try {
        const { userId, amount, method } = req.body;
        const payment = new Payment({ user: userId, amount, method });
        await payment.save();
        res.status(201).json(payment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};