import React, {useState} from 'react'
import API from '../api/api'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);


function CheckoutForm({cart, onPaid}){
const stripe = useStripe();
const elements = useElements();
const [loading, setLoading] = useState(false);
const total = cart.reduce((s,i)=> s + i.price*i.quantity, 0);
const handlePay = async (e) =>{
e.preventDefault(); setLoading(true);
const {data} = await API.post('/payments/create-payment-intent', { amount: total });
const clientSecret = data.clientSecret;
const card = elements.getElement(CardElement);
const res = await stripe.confirmCardPayment(clientSecret, { payment_method: { card }});
if(res.error) { alert(res.error.message); setLoading(false); return; }
// save order
const orderRes = await API.post('/orders', { items: cart, total, stripePaymentIntent: res.paymentIntent.id });
onPaid(orderRes.data);
setLoading(false);
}
return (
<form onSubmit={handlePay}>
<CardElement />
<button type='submit' disabled={!stripe || loading}>Pay ₹{total}</button>
</form>
)
}


export default function Checkout(){
const sampleCart = [{name:'Paneer Butter Masala', price:120, quantity:1}];
return (
<Elements stripe={stripePromise}>
<div className='container'>
<h2>Checkout</h2>
<CheckoutForm cart={sampleCart} onPaid={(order)=>{ window.location = `/order/${order._id}` }} />
</div>
</Elements>
)
}