import React from 'react';
import ProductCard from '../../ProductsPage/ProductCard/ProductCard';
import AdvertiseCard from './AdvertiseCard';

const Advertise = ({ advertiseProducts }) => {
    return (
        <div className="pb-16 bg-gradient-to-l from-blue-900 via-slate-900 to-black pt-12">
            <div data-aos="fade-down">
                <h2 className="font-bold text-lime-400 text-3xl mt-12 mb-5">Available new collection!!!</h2>
                <p className="mx-24 text-gray-200">That all are the new collection for all buyers. Now term to choose the best product and buy that product to get the fresh one. In cricket, you must require all equipment to play it. Playing cricket with no cricket equipment is a waste of time. BCCI had been set similar laws to play cricket. You must be aware of cricket equipment if you are a professional cricketer. </p>
            </div>


            <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-12">
                {
                    advertiseProducts.map(product => <AdvertiseCard
                        product={product}
                    >
                    </AdvertiseCard>
                    )
                }
            </div>
        </div>
    );
};

export default Advertise;