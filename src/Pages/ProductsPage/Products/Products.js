import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import DisplaySpinner from '../../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Banner from '../../HomePage/Banner/Banner';
import BookingModal from '../BookigProducts/BookingModal/BookingModal';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const [bookingProduct, setBookingProduct] = useState(null);
    const { loading, setLoading } = useContext(AuthContext)
    const pathname = document.location.pathname;
    const idArr = pathname.split('/');
    const id = idArr[2];
    // const [products, setProducts] = useState([]);
    const { data: categories = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://cricket-lover-server-site-s-m-zubayer.vercel.app/categories`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    })

    const findCategory = categories.find(category => category?._id === id)
    console.log(findCategory?.categoryName)
    const url = `https://cricket-lover-server-site-s-m-zubayer.vercel.app/products/${findCategory?.categoryName}`;


    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products', findCategory?.categoryName],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    const availableProducts = products.filter(product => product?.sold === false)


    if (isLoading) {
        return <DisplaySpinner></DisplaySpinner>
    }
    return (
        <div className="bg-gradient-to-l from-blue-900 via-slate-900 to-black">
            <Banner></Banner>
            <h2 className="font-bold text-cyan-400 text-3xl pt-12 pb-5 ">Available new collection!!!</h2>
            <p className="mx-16 mb-5 text-gray-200 font-semibold">That all are the new collection for all buyers. Now term to choose the best product and buy that product to get the fresh one. In cricket, you must require all equipment to play it. Playing cricket with no cricket equipment is a waste of time. BCCI had been set similar laws to play cricket. You must be aware of cricket equipment if you are a professional cricketer. </p>
            <div className="pb-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12">

                {
                    availableProducts.map(product => <ProductCard
                        product={product}
                        key={product._id}
                        setBookingProduct={setBookingProduct}
                    ></ProductCard>)
                }


            </div>
            <BookingModal
                product={bookingProduct}
            ></BookingModal>
        </div>

    );
};

export default Products;