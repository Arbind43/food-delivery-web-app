const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const Restaurant = require('../src/models/Restaurant');
require('dotenv').config();
(async ()=>{
await connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/food_delivery');
await Restaurant.deleteMany({});
const r = new Restaurant({ name: 'Spice Garden', location: 'Sector 10', cuisine: 'Indian', rating: 4.5, menu: [ {name:'Paneer Butter Masala', price:120}, {name:'Naan', price:20} ] });
await r.save();
console.log('Seeded');
process.exit(0);
})();