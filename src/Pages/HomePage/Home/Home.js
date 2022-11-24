import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import CategoryCard from '../CategoryCard/CategoryCard';
import History from '../History/History';

const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                console.log(data)
            });

    }, [])


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