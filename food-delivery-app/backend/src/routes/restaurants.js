const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');


router.get('/', async (req,res)=>{
const q = req.query.q || '';
const restaurants = await Restaurant.find(q ? { $text: { $search: q } } : {}).limit(50);
res.json(restaurants);
});


router.get('/:id', async (req,res)=>{
const r = await Restaurant.findById(req.params.id);
res.json(r);
});


module.exports = router;