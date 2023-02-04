import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const CheckOutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { price, name, email, _id, productId } = booking;

    useEffect(() => {

        fetch("https://cricket-lover-server-site-s-m-zubayer.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`

            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
            setProcessing(true);
        }

        setSuccess('');
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {

            console.log('card Info', card)

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id

            }
            toast.success('Payment completed successfully')
            fetch('https://cricket-lover-server-site-s-m-zubayer.vercel.app/payments', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        setSuccess('congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })
            fetch(`https://cricket-lover-server-site-s-m-zubayer.vercel.app/productBook/${productId}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem('Cricket-Lover', data.token);
                    toast.success('Product updated successfully')
                })
            fetch(`https://cricket-lover-server-site-s-m-zubayer.vercel.app/booking/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem('Cricket-Lover', data.token);
                    toast.success('Booking updated successfully')
                })


        }
        setProcessing(false);
    }

    return (
        <div className="w-full mx-auto">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-sm mt-4 bg-amber-400"
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <>
                    <p className="text-green-500">{success}</p>
                    <p>Your transactionId <span className="font-bold">{transactionId}</span></p>
                </>
            }
        </div>
    );
};

export default CheckOutForm;