import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: myOrders = [] } = useQuery({
        queryKey: ['bmyOrders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div class="flex justify-center bg-slate-100 shadow-2xl m-11 rounded-lg">

                <div class="flex flex-col justify-center  my-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl  ">
                    <div class="flex flex-col justify-center items-center text-center">
                        <div class="text-xl md:text-3xl text-black font-bold uppercase">Contact Us</div>
                        <div class="text-sm md:text-xl text-black font-medium">Get in touch and let us know how we can help.
                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {myOrders.map(order =>

                            <div class="flex flex-col justify-center items-center lg:flex-row space-y-28 lg:space-y-0  lg:space-x-10">
                                <div
                                    class="bg-white shadow-lg flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit">
                                    <div class="-mt-10 ">
                                        <img className="h-16 w-16 rounded-full" src={order.img} alt="" />
                                    </div>
                                    <div class="font-semibold text-2xl">{order.productName}</div>
                                    <div className="flex justify-between gap-8 p-5">
                                        <p>Seller Name: {order.name}</p>
                                        <p>Location: {order.location}</p>
                                    </div>
                                    <div className="flex gap-8 justify-between p-5">
                                        <p>Price: {order.price}</p>
                                        <p>Date: {order.date}</p>
                                    </div>
                                    <p
                                        class="text-center text-sm px-6 bg-blue-500 py-2 rounded-3xl hover:bg-cyan-500 p-5 text-white font-medium">
                                        <Link to="/myOrder/payment">Pay</Link>
                                    </p>

                                </div>

                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div >
    );
};

export default MyOrders;