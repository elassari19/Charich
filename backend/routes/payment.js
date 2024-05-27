const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_API_KEY);

const router = express.Router();

router.post('/payment', async (req, res) => {

  const line_items = req.body.map((item) => ({
    quantity: item.qty,
    price_data: {
      currency: "usd",
      unit_amount: item.price,
      product_data: {
        name: item.name,
        description: item.description,
        images: ["https://e-commerce-porofolio.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Felassari%2Fimage%2Fupload%2Fv1713395312%2Fmy-ecom-app%2Fproducts%2Foutdoor-platform-men%2Fhpfwnjmv72itbvfwg0vv.jpg&w=828&q=75"],
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

    console.log("Event: ", event);

    return res.status(200).json({
      confirm: 'Payment successful', id: event.id
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;