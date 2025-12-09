import React from 'react'
export default function RestaurantCard({r}){
return (
<div className='card'>
<h3>{r.name}</h3>
<p>{r.cuisine} • {r.location}</p>
<ul>
{r.menu?.map((m,idx)=> <li key={idx}>{m.name} - ₹{m.price}</li>)}
</ul>
</div>
)
}