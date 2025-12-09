const mongoose = require('mongoose');
const MenuItemSchema = new mongoose.Schema({
name: String,
description: String,
price: Number,
image: String
});
const RestaurantSchema = new mongoose.Schema({
name: { type: String, required: true, index: true },
location: String,
cuisine: String,
rating: Number,
menu: [MenuItemSchema]
});
RestaurantSchema.index({ name: 'text', cuisine: 'text' });
module.exports = mongoose.model('Restaurant', RestaurantSchema);