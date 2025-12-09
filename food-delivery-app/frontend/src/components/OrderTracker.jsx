import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { listenToOrder } from '../firebaseConfig'
import API from '../api/api'


export default function OrderTracker(){
const { id } = useParams();
const [status, setStatus] = useState(null);
useEffect(()=>{
// initial fetch
API.get(`/orders/${id}`).then(r=> setStatus(r.data.status)).catch(console.error);
// realtime listener
listenToOrder(id, val => { if(val) setStatus(val.status); });
},[id]);
return (
<div className='container'>
<h2>Order #{id}</h2>
<p>Status: {status}</p>
</div>
)
}