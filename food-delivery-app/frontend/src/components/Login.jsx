import React, {useState} from 'react'
import API from '../api/api'
import { useNavigate } from 'react-router-dom'


export default function Login(){
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const navigate = useNavigate();


const handleSubmit = async (e) =>{
e.preventDefault(); setLoading(true);
try{
const { data } = await API.post('/auth/login', { email, password });
localStorage.setItem('token', data.token);
localStorage.setItem('user', JSON.stringify(data.user));
navigate('/');
}catch(err){
alert(err?.response?.data?.message || 'Login failed');
} finally{ setLoading(false); }
}


return (
<div className='container p-4 max-w-md mx-auto'>
<h2 className='text-2xl mb-4'>Login</h2>
<form onSubmit={handleSubmit} className='space-y-4'>
<div>
<label className='block text-sm'>Email</label>
<input value={email} onChange={e=>setEmail(e.target.value)} className='w-full p-2 border rounded' type='email' required />
</div>
<div>
<label className='block text-sm'>Password</label>
<input value={password} onChange={e=>setPassword(e.target.value)} className='w-full p-2 border rounded' type='password' required />
</div>
<div>
<button className='px-4 py-2 bg-blue-600 text-white rounded' disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
</div>
</form>
</div>
)
}