import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EachSeller from './EachSeller';

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
                        <EachSeller
                            user={user}
                            key={user._id}
                        ></EachSeller>
                    )}

                </table>
            </div>
        </div>
    );
};

export default AllSellers;