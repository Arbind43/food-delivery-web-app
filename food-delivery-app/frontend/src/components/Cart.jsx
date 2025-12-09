import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Cart({cart = [], setCart}){
const navigate = useNavigate();
const total = cart.reduce((s,i)=> s + (i.price * i.quantity), 0);
const inc = (idx) => {
const copy = [...cart]; copy[idx].quantity += 1; setCart(copy);
}
const dec = (idx) => {
const copy = [...cart]; copy[idx].quantity = Math.max(1, copy[idx].quantity - 1); setCart(copy);
}
const removeItem = (idx) => { const copy = [...cart]; copy.splice(idx,1); setCart(copy); }
return (
<div className='container p-4'>
<h2 className='text-2xl mb-4'>Your Cart</h2>
{cart.length === 0 ? (
<p>Your cart is empty.</p>
) : (
<div className='space-y-4'>
{cart.map((item, idx) => (
<div key={idx} className='flex items-center justify-between p-3 border rounded'>
<div>
<div className='font-medium'>{item.name}</div>
<div className='text-sm'>₹{item.price} × {item.quantity}</div>
</div>
<div className='flex items-center gap-2'>
<button onClick={()=>dec(idx)} className='px-2 py-1 rounded border'>-</button>
<button onClick={()=>inc(idx)} className='px-2 py-1 rounded border'>+</button>
<button onClick={()=>removeItem(idx)} className='px-2 py-1 rounded border text-red-600'>Remove</button>
</div>
</div>
))}


<div className='flex items-center justify-between p-3 border-t'>
<div className='font-semibold'>Total</div>
<div className='font-semibold'>₹{total}</div>
</div>


<div className='flex justify-end'>
<button onClick={()=>navigate('/checkout')} className='px-4 py-2 rounded bg-blue-600 text-white'>Proceed to Checkout</button>
</div>
</div>
)}
</div>
)
}