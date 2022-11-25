import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import DisplaySpinner from '../../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import Banner from '../../HomePage/Banner/Banner';
import BookingModal from '../BookigProducts/BookingModal/BookingModal';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const [bookingProduct, setBookingProduct] = useState(null);
    const url = document.referrer;
    const id = url.split('/')
    console.log("pathname", id[4])
    // const [products, setProducts] = useState([]);
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products`);
            const data = await res.json();
            return data;
        }
    })


    console.log(products)
    if (isLoading) {
        return <DisplaySpinner></DisplaySpinner>
    }
    return (
        <div>
            <Banner></Banner>
            <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12">
                {
                    products.map(product => <ProductCard
                        product={product}
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