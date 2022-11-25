import React from 'react';

const ProductCard = ({ product, setBookingProduct }) => {
    console.log(product);
    const { ProductName, productImg, productCategory, resalePrice, date, host, sellerName, verified, conditionType, mobileNo, location, description, categoryId, originalPrice, duration } = product;
    console.log(ProductName, productImg, productCategory, resalePrice, date, host, sellerName, verified, conditionType, mobileNo, location, description, categoryId, originalPrice)
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-900 text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src={productImg} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />

                    <div className="flex flex-col">
                        <div className="flex">
                            <a rel="noopener noreferrer" href="#" className="text-md font-semibold mr-1">{sellerName}</a>
                            {verified && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>}
                        </div>
                        <div className="flex justify-between w-full">
                            <p className="text-xs lg:text-sm mr-12 md:mr-24">Post: {date}</p>
                            <p className="text-xs lg:text-sm">Location: {location}</p>
                            {/* <p className="text-xs">Use Duration: {duration} {duration > 1 ? 'months' : 'month'}</p> */}
                        </div>

                    </div>
                </div>
                <div>
                    <img src={productImg} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{ProductName}</h2>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>
                <div className="flex justify-between w-full">
                    <p className="text-base  text-left mr-3">Original Price:{originalPrice}$</p>
                    <p className="text-base mr-3">Resale Price: {resalePrice}$</p>
                </div>
                <div>

                    <label
                        htmlFor="booking-modal"
                        onClick={() => setBookingProduct(product)}
                        className="btn bg-yellow-300 text-black w-full rounded-lg py-2">Book Now</label>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;