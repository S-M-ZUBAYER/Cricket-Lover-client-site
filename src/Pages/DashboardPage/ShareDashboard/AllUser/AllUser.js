import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUser = () => {
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
    }, [])
    console.log(users)
    return (


        <div>
            <p>
                users={users.length}
            </p>
        </div>
    );
};

export default AllUser;