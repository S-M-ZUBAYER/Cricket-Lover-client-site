import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import EachSeller from './EachSeller';
import DisplaySpinner from '../../../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';

const AllSellers = () => {

    const { user, loading, setLoading } = useContext(AuthContext);
    const [users, setUsers] = useState([])
    // const url = `http://localhost:5000/users`;

    // const { data: users = [], isLoading, refetch } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
    //             }
    //         });
    //         const data = await res.json();
    //         return data;
    //     }
    // });
    useEffect(() => {
        fetch('http://localhost:5000/users')

            .then(res => res.json())
            .then(data => {
                setLoading(true)
                setUsers(data);
                console.log(data)
                setLoading(false)
            });

    }, [])

    if (loading) {
        return <DisplaySpinner></DisplaySpinner>
    }

    const handleToDelete = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const newUsers = users?.filter(usr => usr._id !== user?._id);
                    setUsers(newUsers);
                    toast.success(`${user.name} deleted successfully`)
                }
                console.log(data);

            })
    }

    // refetch();
    // if (isLoading) {
    //     return <DisplaySpinner></DisplaySpinner>
    // }
    const Sellers = users?.filter(user => user?.accountType === "Seller")

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
                    {Sellers?.map(user =>
                        <EachSeller
                            user={user}
                            key={user._id}
                            handleToDelete={handleToDelete}
                        ></EachSeller>
                    )}

                </table>
            </div>
        </div>
    );
};

export default AllSellers;