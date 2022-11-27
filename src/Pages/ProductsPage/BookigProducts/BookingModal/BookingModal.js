import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import Moment from 'moment';
const insertTime = new Date().getTime();
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();

const BookingModal = ({ refetch, product }) => {

    // const currentDate = new Date();
    const formatDate = Moment().format('DD-MM-YYYY');


    const { user } = useContext(AuthContext);
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.slot.name;
        const productName = form.productName.value;
        const img = form.img.value;
        const email = form.email.value;
        const sellerName = form.sellerName.value;
        const date = form.date.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const booking = {
            name,
            email,
            productName,
            img,
            date,
            sellerName,
            phone,
            price,
            location,
            time,
            insertTime
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
                if (data.acknowledged) {
                    // setBooking(null);
                    form.reset();
                    toast.success('Booking Confirmed Successfully');
                }
                else {
                    // setBooking(null);
                    toast.error(data.message);
                }

            })
    }
    console.log(product)
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
                        <input name="productName" type="text" defaultValue={product?.productName} disabled placeholder="Item name" className="input w-full input-bordered" />
                        <input name="sellerName" defaultValue={product?.name} disabled type="text" placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="img" type="text" defaultValue={product?.image} disabled placeholder="Product Img" className="input w-full input-bordered" />
                        <input name="price" type="text" defaultValue={product?.resalePrice} disabled placeholder="Price" className="input w-full input-bordered" />
                        <input name="date" type="text" defaultValue={formatDate} disabled placeholder="Booking date" className="input w-full input-bordered" />
                        <input name="time" type="text" defaultValue={time} disabled placeholder="Booking date" className="input w-full input-bordered" />
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