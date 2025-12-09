const mongoose = require('mongoose');
const OrderItem = new mongoose.Schema({
itemId: mongoose.Schema.Types.ObjectId,
name: String,
price: Number,
quantity: Number
});
const OrderSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
items: [OrderItem],
total: Number,
status: { type: String, enum: ['pending','accepted','preparing','on_the_way','delivered','cancelled'], default: 'pending' },
stripePaymentIntent: String
}, { timestamps: true });
module.exports = mongoose.model('Order', OrderSchema);