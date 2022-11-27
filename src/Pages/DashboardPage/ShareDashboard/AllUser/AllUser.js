import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import EachUser from './EachUser';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import DisplaySpinner from '../../../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import toast from 'react-hot-toast';

const AllUser = () => {


    const url = `http://localhost:5000/users`;

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleToDelete = (user) => {
        console.log(`${user.userName} deleted successfully`)
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('ACCESS_TOKEN')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${user.name} deleted successfully`)
                }
                console.log(data);

            })
    }

    refetch();
    if (isLoading) {
        return <DisplaySpinner></DisplaySpinner>
    }
    return (


        <div>
            <h2 className="text-3xl text-lime-500 font-bold mb-5">
                Available user In your site .......
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
                    {users.map(user =>
                        <EachUser
                            user={user}
                            key={user._id}
                            handleToDelete={handleToDelete}
                        ></EachUser>
                    )}

                </table>
            </div>
        </div>
    );
};

export default AllUser;