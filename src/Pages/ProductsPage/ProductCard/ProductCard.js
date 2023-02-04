import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import DisplaySpinner from '../../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const ProductCard = ({ product, setBookingProduct }) => {

    const url = `https://cricket-lover-server-site-s-m-zubayer.vercel.app/user?email=${product?.email}`;

    const { data: user = [], isLoading, refetch } = useQuery({
        queryKey: ['user', product?.email],
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


    const { name, productName, image, sellerImg, resalePrice, date, quality, condition, phone, sellReason, location, description, originalPrice, duration } = product;
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 bg-gradient-to-t from-slate-800 via-blue-900 to-gray-900  overflow-hidden rounded-lg shadow-md text-gray-200">
                <div className="flex space-x-4 mb-3">
                    <img alt="" src={sellerImg} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />

                    <div className="flex flex-col w-full">
                        <div className="flex justify-between relative">
                            <h3 className="text-md font-semibold">{name}</h3>
                            <span>
                                {user?.verify && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute text-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>}
                            </span>

                            <p className="text-xs lg:text-sm">Post: {date}</p>
                        </div>
                        <div className="flex justify-between w-full">
                            <p className="text-xs lg:text-sm">Location: {location}</p>
                            <p className="text-xs">Use Duration: {duration} {duration > 1 ? 'months' : 'month'}</p>
                        </div>
                        <p className="text-sm text-left">Contact: {phone}</p>

                    </div>
                </div>
                <div>
                    <img src={image} alt="" className="object-cover rounded-lg w-full mb-4 h-56 " />
                    <h2 className="mb-1 text-xl font-semibold">{productName}</h2>
                    <p className="text-sm text-gray-200">{description.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                </div>
                <div className="flex justify-between w-full mt-3">
                    <p className="text-sm  text-left mr-3">Condition: {condition}</p>
                    <p className="text-sm mr-3">Damage: {quality}</p>
                </div>
                <div className="flex justify-between w-full mb-3">
                    <p className="text-base  text-left mr-3">Original Price:{originalPrice}$</p>
                    <p className="text-base mr-3">Resale Price: {resalePrice}$</p>
                </div>
                <p className="text-sm text-left mb-5">Reason: <span className="text-sm">{sellReason}</span></p>
                <div>

                    <label
                        htmlFor="booking-modal"
                        onClick={() => setBookingProduct(product)}
                        className="btn bg-yellow-300 text-black w-full rounded-lg py-2">Book Now</label>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;