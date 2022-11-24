import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://kidspace-server-site.vercel.app/services')
            .then(res => res.json())
            .then(data => console.log(data));

    }, [])
    console.log(products)

    return (
        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            this is products
            {
                // products.map(product => <ProductCard></ProductCard>)
            }
        </div>
    );
};

export default Products;