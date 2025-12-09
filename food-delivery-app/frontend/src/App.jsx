import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RestaurantList from './components/RestaurantList'
import Checkout from './components/Checkout'
import OrderTracker from './components/OrderTracker'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'


export default function App(){
return (
<div>
<Navbar />
<Routes>
<Route path='/' element={<RestaurantList/>} />
<Route path='/checkout' element={<Checkout/>} />
<Route path='/order/:id' element={<OrderTracker/>} />
<Route path='/login' element={<Login/>} />
<Route path='/register' element={<Register/>} />
</Routes>
</div>
)
}