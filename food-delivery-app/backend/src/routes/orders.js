const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Order = require('../models/Order');
const adminPush = require('../utils/firebasePush'); // small helper we'll write inline later


// create order (after successful stripe payment on frontend)
router.post('/', auth, async (req,res)=>{
const {items, total, stripePaymentIntent} = req.body;
const order = new Order({ user: req.user._id, items, total, stripePaymentIntent });
await order.save();
// push to firebase for real-time tracking
await adminPush(`/orders/${order._id}`, { status: order.status, createdAt: order.createdAt, total: order.total });
res.json(order);
});


router.get('/:id', auth, async (req,res)=>{
const order = await Order.findById(req.params.id).populate('user','name email');
res.json(order);
});


// admin updates status
router.patch('/:id/status', auth, async (req,res)=>{
const {status} = req.body;
// ideally check req.user.role === 'admin'
const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
await adminPush(`/orders/${order._id}`, { status });
res.json(order);
});


module.exports = router;