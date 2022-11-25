import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const [img, setImg] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.files[0];
        const email = event.target.email.value;
        console.log(name, image, email);


        const formData = new FormData();
        formData.append('image', image);

        //70078de6ca48a9e25382bba10bf2e8df
        //https://api.imgbb.com/1/upload


        const url = ' https://api.imgbb.com/1/upload?key=70078de6ca48a9e25382bba10bf2e8df';
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData.data.display_url)
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h2 className="text-3xl text-lime-400 font-bold mt-12 mb-5">
                Welcome to use this site to sell your product!!!
            </h2>
            <div className="mx-12 p-5 border rounded-lg border-8 text-slate-700 bg-slate-100 shadow-2xl">
                <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-3 mt-10'>
                    <input name="name" defaultValue={user?.displayName} disabled type="text" placeholder="Your Name" className="input w-full input-bordered" />
                    <input name="email" defaultValue={user?.email} disabled type="email" placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                    <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                    <input name="productCategory" type="text" placeholder="ProductCategory Name" className="input w-full input-bordered" />
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
                    <input name="description" type="text" placeholder="Product Details" className="input w-full input-bordered" />
                    <input name="duration" type="text" placeholder="Use Duration" className="input w-full input-bordered" />
                    <input name="date" type="text" placeholder="Post date" className="input w-full input-bordered" />
                    <input name="location" type="text" placeholder="Location" className="input w-full input-bordered" />
                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                    <input name="price" type="text" placeholder="Price" className="input w-full input-bordered" />
                    <div className="form-control">
                        <div className="input-group">
                            <select name='sold' type="boolean" placeholder='Sold Status' className="select select-bordered w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
                                {/* <option disabled selected>Pick category</option> */}
                                <option>true</option>
                                <option>false</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="input-group">
                            <select name='available' type="boolean" className="select select-bordered w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
                                {/* <option disabled selected>Pick category</option> */}
                                <option>true</option>
                                <option>false</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="input-group">
                            <select name='Quality' className="select select-bordered w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
                                {/* <option disabled selected>Pick category</option> */}
                                <option>Excellent</option>
                                <option>Good</option>
                                <option>Fair</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <input className='btn btn-accent w-full col-span-2' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;