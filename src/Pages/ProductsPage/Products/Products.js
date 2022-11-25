import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import DisplaySpinner from '../../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    // const [products, setProducts] = useState([]);
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/products')
            .then(res => res.json())
    })


    console.log(products)
    if (isLoading) {
        return <DisplaySpinner></DisplaySpinner>
    }
    return (
        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            this is products
            {
                products.map(product => <ProductCard></ProductCard>)
            }
        </div>
    );
};

export default Products;