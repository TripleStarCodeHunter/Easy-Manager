import './pay-button.css'
import { useState,useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';


const PayButton = ()=>{
    
    return(
        <a
        id="stripe-button"
        href="https://buy.stripe.com/test_14kbKd3M14bkd0c9AA"
        >Pay </a>
    )
}
export default PayButton;