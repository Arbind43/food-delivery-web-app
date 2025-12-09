import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Navbar({ user, onLogout, cartCount = 0 }){
const navigate = useNavigate();
return (
<nav className='w-full bg-white shadow p-4'>
<div className='container mx-auto flex items-center justify-between'>
<div className='flex items-center gap-4'>
<Link to='/' className='text-xl font-bold'>Foodify</Link>
<Link to='/' className='text-sm'>Restaurants</Link>
</div>
<div className='flex items-center gap-4'>
<Link to='/cart' className='relative'>
Cart
{cartCount > 0 && <span className='ml-2 inline-block bg-red-500 text-white text-xs px-2 py-0.5 rounded-full'>{cartCount}</span>}
</Link>
{user ? (
<div className='flex items-center gap-3'>
<span className='text-sm'>{user.name}</span>
<button onClick={()=>{ onLogout(); navigate('/login'); }} className='px-3 py-1 border rounded'>Logout</button>
</div>
) : (
<div className='flex items-center gap-2'>
<Link to='/login' className='px-3 py-1 border rounded'>Login</Link>
<Link to='/register' className='px-3 py-1 bg-blue-600 text-white rounded'>Sign up</Link>
</div>
)}
</div>
</div>
</nav>
)
}