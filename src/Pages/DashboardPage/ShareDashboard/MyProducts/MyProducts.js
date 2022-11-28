import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import DisplaySpinner from '../../../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import EachProduct from './EachProduct';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const url = `https://cricket-lover-server-site-s-m-zubayer.vercel.app/products?email=${user?.email}`;

    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts', user?.email],
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
            <h2 className="text-amber-300 font-bold text-3xl">Your available added Products!!!</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    myProducts.map(product => <EachProduct
                        product={product}
                        key={product._id}
                    ></EachProduct>)
                }
            </div>

        </div >
    );
};

export default MyProducts;