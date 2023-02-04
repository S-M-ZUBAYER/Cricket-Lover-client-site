import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DisplaySpinner from '../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);

    const url = `https://cricket-lover-server-site-s-m-zubayer.vercel.app/bookings?email=${user?.email}`;

    const { data: myOrders = [], isLoading, refetch } = useQuery({
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
    refetch();
    if (isLoading) {
        return <DisplaySpinner></DisplaySpinner>
    }
    return (
        <div>
            <div className="flex justify-center bg-slate-100 shadow-2xl m-11 rounded-lg">

                <div className="flex flex-col justify-center  my-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl  ">
                    <div className="flex flex-col justify-center items-center text-center">
                        <div className="text-xl md:text-3xl text-green-500 font-bold uppercase my-5 ">Your available orders!!!</div>
                        <div className="text-sm md:text-xl text-black font-medium">Please complete your payment for next process....
                        </div>

                    </div>
                    {myOrders.length === 0 && <div className="text-2xl font-semibold text-red-600">
                        No order available please order product...
                    </div>}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {myOrders.map(order =>

                            <div className="flex flex-col justify-center items-center lg:flex-row space-y-28 lg:space-y-0  lg:space-x-10 mb-12">
                                <div
                                    className=" bg-lime-300 shadow-lg flex flex-col justify-center rounded-lg items-center px-4 py-4 h-56 md:w-[80%] lg:w-fit">
                                    <div className="-mt-16 lg:-mt-20">
                                        <img className="h-12 w-12 rounded-full" src={order.img} alt="" />
                                    </div>
                                    <div className="font-semibold text-xl">{order.productName}</div>
                                    <div className="flex justify-between text-left gap-8 pt-3 text-sm font-semibold">
                                        <p>Seller: <span className="text-xs">{order.sellerName}</span> </p>
                                        <p>Location: <span className="text-xs">{order.location}</span></p>
                                    </div>
                                    <div className="flex gap-8 justify-between text-left  text-sm font-semibold">
                                        <p>Price: <span>{order.price}</span></p>
                                        <p>Date: {order.date}</p>
                                    </div>
                                    {
                                        order?.paid ?
                                            <p className="text-center text-sm px-6 bg-green-500 py-2 mt-5 rounded-3xl p-5 text-white font-medium">Paid</p> :
                                            <p
                                                className="text-center text-sm px-6 bg-blue-500 py-2 mt-5 rounded-3xl hover:bg-cyan-500 p-5 text-white font-medium">
                                                <Link to={`/dashboard/payment/${order._id}`}>Pay</Link>
                                            </p>
                                    }


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