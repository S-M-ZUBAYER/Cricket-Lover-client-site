import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import Moment from 'moment';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const [img, setImg] = useState('')
    const navigate = useNavigate();
    const formatDate = Moment().format('DD-MM-YYYY');
    const handleSubmit = (event) => {
        const imgHostKey = process.env.REACT_APP_imgbb_key;
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.files[0];
        const email = event.target.email.value;
        const available = event.target.available.value;
        const phone = event.target.phone.value;
        const category = event.target.category.value;
        const productName = event.target.productName.value;
        const resalePrice = event.target.resalePrice.value;
        const condition = event.target.condition.value;
        const description = event.target.description.value;
        const duration = event.target.duration.value;
        const originalPrice = event.target.originalPrice.value;
        const date = formatDate;
        const sold = event.target.sold.value;
        const purchaseDate = event.target.purchaseDate.value;

        const formData = new FormData();
        formData.append('image', image);

        //70078de6ca48a9e25382bba10bf2e8df
        //https://api.imgbb.com/1/upload


        const url = `https://api.imgbb.com/1/upload?key=70078de6ca48a9e25382bba10bf2e8df`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        name,
                        image: imgData.data.url,
                        email,
                        available,
                        phone,
                        category,
                        productName,
                        resalePrice,
                        condition,
                        purchaseDate,
                        description,
                        duration,
                        originalPrice,
                        date,
                        sold
                    }
                    fetch('http://localhost:5000/products', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            toast.success(`product added successfully`)
                            navigate('/dashboard/addProduct')
                        })
                }
            })
    }

    //     fetch(url, {
    //         method: "POST",
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(imgData => {
    //             if (imgData.success) {
    //                 console.log(imgData.data.url);
    // const product = {
    //     name,
    //     image: formData,
    //     email,
    //     available,
    //     phone,
    //     category,
    //     productName,
    //     resalePrice,
    //     condition,
    //     purchaseDate,
    //     description,
    //     duration,
    //     originalPrice,
    //     date,
    //     sold
    // }
    //             }
    //         })
    //         .catch(err => console.log(err));
    //     fetch('http://localhost:5000/products', {
    //         method: "POST",
    //         headers: {
    //             'content-type': 'application/json',
    //             authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    //         },
    //         body: JSON.stringify(product)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //             toast.success(`product added successfully`);
    //             event.target.reset();
    //             navigate('/dashboard/addProduct')
    //         })


    // }
    return (
        <div>
            <h2 className="text-3xl text-lime-400 font-bold mt-12 mb-5">
                Welcome to use this site to sell your product!!!
            </h2>
            <div className="mx-12 p-5 border rounded-lg border-8 text-slate-700 bg-slate-100 shadow-2xl">
                <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-3 mt-10'>
                    <input name="name" defaultValue={user?.displayName} disabled type="text" placeholder="Your Name" className="input w-full input-bordered" />
                    <input name="email" defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="phone" type="text" placeholder="Seller Phone Number" className="input w-full input-bordered" />
                    <input name="location" type="text" placeholder="Product Location" className="input w-full input-bordered" />
                    <div className="form-control">
                        <div className="input-group">
                            <select name='category' type="boolean" placeholder='Sold Status' className="select select-bordered w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
                                <option disabled selected>Pick category</option>
                                <option>Balls</option>
                                <option>Bats</option>
                                <option>Helmets</option>
                            </select>
                        </div>
                    </div>
                    <input name="productName" type="text" placeholder="Product Name" className="input w-full input-bordered" />
                    <input name="originalPrice" type="number" placeholder="Original Price" className="input w-full input-bordered" />
                    <input name="resalePrice" type="number" placeholder="Resale Price" className="input w-full input-bordered" />
                    <div>
                        {/* <label htmlFor='image' className='block mb-2 text-sm text-left'>
                            Select Image:
                        </label> */}
                        <input
                            type='file'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                            id='image'
                            name='image'
                            accept='image/*'
                            required
                        />
                    </div>
                    <input name="description" type="text" placeholder="Product Details" className="input w-full input-bordered textarea textarea-primary" />
                    <input name="duration" type="text" placeholder="Use Duration in month" className="input w-full input-bordered" />
                    {/* <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" /> */}
                    {/* <input name="price" type="text" placeholder="Price" className="input w-full input-bordered" /> */}
                    <div className="form-control">
                        <div className="input-group">
                            <select name='sold' type="boolean" placeholder='Sold Status' className="select select-bordered w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
                                <option disabled selected>Pick Sold Status</option>
                                <option>true</option>
                                <option>false</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="input-group">
                            <select name='available' type="boolean" className="select select-bordered w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
                                <option disabled selected>Pick Available Status</option>
                                <option>true</option>
                                <option>false</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="input-group">
                            <select name='condition' className="select select-bordered w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
                                <option disabled selected>Pick Product Condition</option>
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="text-left" htmlFor="">Purchase date</label>
                        <input name="date" type="date" placeholder="Post date" className="input w-full input-bordered" />
                    </div>

                    <div >
                        <label className="text-left" htmlFor="">Post date</label>
                        <input name="purchaseDate" defaultValue={formatDate} placeholder="Purchase Date" className="input w-full input-bordered" />
                    </div>
                    <br />
                    <input className='btn btn-accent w-full col-span-2' type="submit" value="Add Product" />
                </form>
            </div >
        </div >
    );
};

export default AddProduct;