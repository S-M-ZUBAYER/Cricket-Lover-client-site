import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import Moment from 'moment';
import BtnSpinner from '../../../../components/Sprinners/BtnSpinner/BtnSpinner';
const insertTime = new Date().getTime();

const AddProduct = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [img, setImg] = useState('')
    const navigate = useNavigate();
    const formatDate = Moment().format('DD-MM-YYYY');
    const handleSubmit = (event) => {
        const imgHostKey = process.env.REACT_APP_imgbb_key;
        setLoading(true)
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.files[0];
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const location = event.target.location.value;
        const category = event.target.category.value;
        const productName = event.target.productName.value;
        const resalePrice = event.target.resalePrice.value;
        const condition = event.target.condition.value;
        const quality = event.target.quality.value;
        const description = event.target.description.value;
        const duration = event.target.duration.value;
        const sellReason = event.target.sellReason.value;
        const originalPrice = event.target.originalPrice.value;
        const date = formatDate;
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
                        sellerImg: user.photoURL,
                        image: imgData.data.url,
                        email,
                        location,
                        advertise: false,
                        available: true,
                        phone,
                        category,
                        productName,
                        resalePrice,
                        condition,
                        quality,
                        purchaseDate,
                        duration,
                        originalPrice,
                        date,
                        sold: false,
                        description,
                        sellReason,
                        insertTime
                    }
                    fetch('https://cricket-lover-server-site-s-m-zubayer.vercel.app/products', {
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
                            setLoading(false)
                            navigate('/dashboard/myProducts')
                        })
                }
            })
    }


    return (
        <div>
            <h2 data-aos="fade-down" className="text-3xl text-lime-400 font-bold mt-12 mb-5">
                Welcome to use this site to sell your product!!!
            </h2>
            <div data-aos="zoom-in-up" className="mx-8 p-5 rounded-lg border-8 text-slate-700 bg-gradient-to-l from-blue-900 via-slate-900 to-black pt-12 shadow-2xl">
                <h3 className="text-2xl text-lime-700 font-bold">
                    Product Description Form:
                </h3>
                <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-3 mt-8'>
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
                                <option>Gloves</option>
                                <option>Stumps</option>
                                <option>pads</option>
                            </select>
                        </div>
                    </div>
                    <input name="productName" type="text" placeholder="Product Name" className="input w-full input-bordered" />
                    <input name="originalPrice" type="number" placeholder="Original Price" className="input w-full input-bordered" />
                    <input name="resalePrice" type="number" placeholder="Resale Price" className="input w-full input-bordered" />
                    <div>

                        <input
                            type='file'
                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                            id='image'
                            name='image'
                            accept='image/*'
                            required
                        />
                    </div>
                    <input name="duration" type="text" placeholder="Use Duration in month" className="input w-full input-bordered" />
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
                    <div className="form-control">
                        <div className="input-group">
                            <select name='quality' className="select select-bordered w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
                                <option disabled selected>Pick Product quality Condition</option>
                                <option>All Ok</option>
                                <option>Damage</option>
                                <option>Repair</option>
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
                    <textarea name='description' className="textarea textarea-success col-span-2" placeholder="Product Details"></textarea>
                    <textarea name='sellReason' className="textarea textarea-success col-span-2" placeholder="Sell Reason Details"></textarea>
                    <br />
                    <input className='btn btn-accent w-full col-span-2' type="submit" value={loading ? <BtnSpinner></BtnSpinner> : "Add Product"} />
                </form>
            </div >
        </div >
    );
};

export default AddProduct;