import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import Moment from 'moment';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch, product }) => {

    // const currentDate = new Date();
    const formatDate = Moment().format('DD-MM-YYYY');


    const { user } = useContext(AuthContext);
    console.log(product)
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.slot.name;
        const productName = form.productName.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            name,
            email,
            productName,
            date,
            phone,
            price,
            location
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    // setBooking(null);
                    form.reset();
                    toast.success('Booking Confirmed Successfully');
                    refetch();
                }
                else {
                    // setBooking(null);
                    toast.error(data.message);
                }

            })

        console.log(booking);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking Product: {product?.ProductName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" defaultValue={user?.displayName} disabled type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="productName" type="text" defaultValue={product?.ProductName} disabled placeholder="Item name" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue={product?.resalePrice} disabled placeholder="Price" className="input w-full input-bordered" />
                        <input name="date" type="text" defaultValue={formatDate} disabled placeholder="Booking date" className="input w-full input-bordered" />
                        <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;