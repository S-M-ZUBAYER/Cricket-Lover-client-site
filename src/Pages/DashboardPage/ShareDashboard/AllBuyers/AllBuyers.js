import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EachBuyer from './EachBuyer';
import DisplaySpinner from '../../../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import toast from 'react-hot-toast';

const AllBuyers = () => {
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
                    const newUsers = users.filter(newUser => newUser._id !== user._id);
                    setUsers(newUsers)
                    toast.success(`${user.name} deleted successfully`)
                }
                console.log(data);

            })
    }

    const Buyers = users.filter(user => user.accountType === "Buyer")

    return (


        <div>
            <h2 className="text-3xl text-lime-500 font-bold mb-5">
                Available Buyers In your site .......
            </h2>
            {
                users ?


                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">

                            <thead>
                                <tr>
                                    <th>User Name / Type</th>
                                    <th>email</th>
                                    <th>Register date</th>
                                    {/* <th>Verify</th> */}
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            {Buyers.map(user =>
                                <EachBuyer
                                    user={user}
                                    key={user._id}
                                    handleToDelete={handleToDelete}
                                ></EachBuyer>
                            )}

                        </table>
                    </div> :
                    <DisplaySpinner></DisplaySpinner>
            }
        </div>
    );
};

export default AllBuyers;