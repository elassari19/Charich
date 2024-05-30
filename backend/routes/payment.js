const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_API_KEY);

const paymentRouter = express.Router();

paymentRouter.post('/', async (req, res) => {
  console.log("payment")

  const line_items = req.body.map((item) => ({
    quantity: item.qty,
    price_data: {
      currency: "usd",
      unit_amount: item.price,
      product_data: {
        name: item.name,
        description: item.description,
        images: [item.image[0].secure_url],
      },
    },
  }))

  try {
    const event = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `http://localhost:3000/orders`,
      cancel_url: `http://localhost:3000/checkout`,
    });

    // console.log("Event: ", event);

    return res.status(200).json({ confirm: 'Payment successful', id: event.id });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = paymentRouter;