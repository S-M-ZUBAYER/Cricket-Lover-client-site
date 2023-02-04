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

    const products = myProducts.filter(product => product?.email === user?.email)

    refetch();
    if (isLoading) {
        return <DisplaySpinner></DisplaySpinner>
    }
    return (
        <div>
            <h2 className="text-amber-300 font-bold text-3xl my-8">Your available added Products!!!</h2>

            {products.length === 0 && <div className="text-2xl font-semibold text-red-600">
                No Product available please add product...
            </div>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <EachProduct
                        product={product}
                        key={product._id}
                        refetch={refetch}
                    ></EachProduct>)
                }
            </div>

        </div >
    );
};

export default MyProducts;