import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from '../CheckOutForm/CheckoutFrom';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);


const Payment = () => {
    const booking = useLoaderData();
    console.log('bookingdata', booking)
    return (
        <div className='text-gray-200'>
            <h3 data-aos="fade-down" className="text-3xl font-bold text-lime-300 py-10">Start Payment system for {booking.productName}</h3>
            <p data-aos="fade-down" className="text-xl">please pay <strong className="text-yellow-500 text-3xl">${booking.price}</strong> to buy {booking.productName} </p>
            <div className="w-96 my-12 mx-auto bg-slate-200 p-10 rounded-xl">
                <Elements stripe={stripePromise}>
                    <CheckOutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;