import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplaySpinner from '../../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Banner from '../Banner/Banner';
import CategoryCard from '../CategoryCard/CategoryCard';
import History from '../History/History';

const Home = () => {
    const { loading, setLoading } = useContext(AuthContext);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')

            .then(res => res.json())
            .then(data => {
                setLoading(true)
                setCategories(data);
                setLoading(false)
            });

    }, [])

    if (loading) {
        return <DisplaySpinner></DisplaySpinner>
    }
    return (
        <div>
            <Banner></Banner>
            <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {

                    categories.map(category => <Link to={`/category/${category?._id}`}><CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard></Link>)
                }
            </div>

            <History></History>
        </div>
    );
};

export default Home;