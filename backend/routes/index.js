const express = require('express');

const productRouter= require('./product');
const userRouter = require('./user');
const paymentRouter = require('./payment');
const authRouter = require('./auth');

const router = express.Router();

router.use('/product', productRouter);
router.use('/user', userRouter);
router.use('/payment', paymentRouter);
router.use('/auth', authRouter);

module.exports = router;