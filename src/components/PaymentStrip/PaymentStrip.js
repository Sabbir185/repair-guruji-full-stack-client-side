import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51IeLQQJvn90Urdz7TTW8LBbHX1k1LUFWgveadGfsJKGdiI95E1m6DKTJW9NjGgSM58J5mtzhq3FbvTs9PzLFI0nk00j42bLZfM');

const PaymentStrip = (props) => {
    const orderInfo = props.orderData;

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm orderData={orderInfo}></CheckoutForm>
        </Elements>
    );
};

export default PaymentStrip;