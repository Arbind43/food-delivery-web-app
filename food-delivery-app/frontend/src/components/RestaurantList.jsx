import React, {useEffect, useState} from 'react'
import API from '../api/api'
import RestaurantCard from './RestaurantCard'


export default function RestaurantList(){
const [list, setList] = useState([]);
useEffect(()=>{ API.get('/restaurants').then(r=>setList(r.data)).catch(console.error); },[]);
return (
<div className='container'>
<h2>Restaurants</h2>
<div className='grid'>
{list.map(r=> <RestaurantCard key={r._id} r={r} />)}
</div>
</div>
)
}