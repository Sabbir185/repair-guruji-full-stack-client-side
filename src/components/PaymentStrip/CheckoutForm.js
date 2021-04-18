import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useHistory } from 'react-router';


const CheckoutForm = (props) => {
  const {email, title, price} = props.orderData;
  // console.log(email, title, price)

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [payError, setPayError] = useState(null);
  const [paySuccess, setPaySuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      // console.log('[error]', error);
      // console.log(error.message);
      setPayError(error.message);
      setPaySuccess(null);
    } else {
      // console.log('[PaymentMethod]', paymentMethod);
      // console.log(paymentMethod.id);
      setPaySuccess(paymentMethod.id);
      setPayError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe} className="btn btn-success mt-4">
        Pay
      </button>
      <br/>
      {
        payError && <h1 className="text-danger my-4">{payError}</h1>
        ||
        paySuccess && <div>
          <h1 className="text-success my-4">Booking Successful ! Your payment ID :  {paySuccess}</h1>
          {
            paySuccess && setTimeout(() => {
              history.push("/")
            }, 5000)
          }
        </div>
      }
    </form>
    
  );
};

export default CheckoutForm;