import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllSellers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersfetch = async () => {

            const config = {
                headers: {
                    authorization: `bearer `
                }
            }
            const data = await axios.get('http://localhost:5000/users', config)
                .then(res => {
                    setUsers(res?.data);
                })
        }
        usersfetch();
    }, []);
    const Sellers = users.filter(user => user.accountType === "Seller")

    return (


        <div>
            <h2 className="text-3xl text-lime-500 font-bold mb-5">
                Available Sellers In your site .......
            </h2>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>User Name / Type</th>
                            <th>email</th>
                            <th>Register date</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {Sellers.map(user =>
                        <tbody>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.userImg} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user.userName}</div>
                                        <div className="text-sm opacity-50">{user.accountType}</div>
                                    </div>
                                </div>
                            </td>
                            {/* <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td> */}
                            <td>{user.email}</td>
                            <td>{user.date}</td>
                            <td><button className="px-2 py-1 bg-lime-200 rounded-lg">Verify</button> </td>
                            <td><button className="px-2 py-1 bg-red-300 rounded-lg">Delete</button> </td>
                        </tbody>
                    )}

                </table>
            </div>
        </div>
    );
};

export default AllSellers;