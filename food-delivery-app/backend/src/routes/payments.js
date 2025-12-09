const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


// create payment intent for total amount (in cents)
router.post('/create-payment-intent', async (req,res)=>{
const {amount, currency = 'inr', metadata = {}} = req.body;
const paymentIntent = await stripe.paymentIntents.create({
amount: Math.round(amount * 100),
currency,
metadata
});
res.json({clientSecret: paymentIntent.client_secret, id: paymentIntent.id});
});


module.exports = router;