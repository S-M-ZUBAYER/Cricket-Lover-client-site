import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplaySpinner from '../../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import CategoryCard from '../CategoryCard/CategoryCard';
import History from '../History/History';
import Review from '../Review/Review';

const Home = () => {
    const { loading, setLoading } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://cricket-lover-server-site-s-m-zubayer.vercel.app/categories')

            .then(res => res.json())
            .then(data => {
                setLoading(true)
                setCategories(data);
                setLoading(false)
            });

    }, [])

    const url = `https://cricket-lover-server-site-s-m-zubayer.vercel.app/products`;

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    const advertiseProducts = products.filter(product => product.advertise === true);

    return (
        <div>
            <Banner></Banner>
            {
                advertiseProducts.length > 0 && <Advertise
                    advertiseProducts={advertiseProducts}
                ></Advertise>
            }
            <div className="pt-16 bg-gradient-to-l from-blue-900 via-slate-900 to-black">
                <div data-aos="fade-down" data-aos-duration="2000">
                    <h2 className="font-bold text-blue-400 text-3xl mb-5">All categories collections!!!</h2>
                    <p className="mx-12 text-gray-200 font-semibold">That all are the new collection for all buyers. Now term to choose the best product and buy that product to get the fresh one. In cricket, you must require all equipment to play it. Playing cricket with no cricket equipment is a waste of time. BCCI had been set similar laws to play cricket. You must be aware of cricket equipment if you are a professional cricketer. </p>
                </div>
            </div>
            <div className="py-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gradient-to-l from-blue-900 via-slate-900 to-black pt-12">
                {loading ?
                    <DisplaySpinner></DisplaySpinner> :
                    <>
                        {
                            categories.map(category => <Link to={`/category/${category?._id}`}><CategoryCard
                                key={category._id}
                                category={category}
                            ></CategoryCard></Link>)
                        }
                    </>
                }
            </div>

            <History></History>
            <Review></Review>
        </div>
    );
};

export default Home;