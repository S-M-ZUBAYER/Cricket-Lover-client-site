import React from 'react';
import image from '../../../Assets/img/cricket-1.png'

const Banner = () => {
    return (
        //style="background-image:url('https://source.unsplash.com/700x400/?white')"
        <div className="h-screen text-gray-200">
            <div className="flex justify-center opacity-90  bg-no-repeat bg-cover h-full md:bg-center" style={{ backgroundImage: `url(${image})` }}
            >
                <div data-aos="fade-down-right" data-aos-duration="2000" data-aos-duration="2000" className="flex flex-col items-center ">

                    <div className="flex flex-col justify-center items-center text-center  max-w-7xl   my-8 py-4 px-10">
                        <h1 className="text-2xl text-green-300 font-semibold tracking-wider ">Welcome to all cricket lovers in our site</h1>
                        <span className="underline underline-offset-2 text-gray-700-mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; </span>
                        <div className="flex flex-col text-gray-700mt-5">
                            <h1 className="text-4xl md:text-[50px] font-bold  text-lime-500">Cricket Lover</h1>
                            <p className="text-xl font-semibold mt-2 md:mt-4 tracking-wide">Place to fulfill your hobbies</p>
                        </div>
                        <p className="mt-4 text-lg font-semibold md:w-[52%] tracking-wide leading-7 ">This is the place for cricket lovers, where they can buy used cricket playing materials with reasonable price and also anyone can sell their used cricket playing materials here.</p>
                        <div className="space-x-3 mt-6 md:mt-4 text-white">
                            <a href="#"> <i
                                className="fa-brands fa-facebook-f bg-blue-600 hover:text-blue-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center "></i>
                            </a>
                            <a href="#"> <i
                                className="fa-brands fa-twitter bg-blue-600 hover:text-red-500 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
                            </a>
                            <a href="#"> <i
                                className="fa-brands fa-linkedin bg-blue-600 hover:text-yellow-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center"></i>
                            </a>
                            <a href="#"> <i
                                className="fa-brands fa-chrome bg-blue-600 hover:text-indigo-600 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
                            </a>

                        </div>
                        <div className="flex mt-10 space-x-5">
                            <button className="bg-white text-blue-900 px-6 py-2 hover:brightness-105 font-semibold">Read
                                More</button>
                            <button
                                className="bg-blue-900 text-white border-2 border-white px-6 py-2 hover:brightness-105 font-semibold">Contact
                                Me</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;