import React from 'react';
import toast from 'react-hot-toast';

const EachSeller = ({ user, handleToDelete }) => {
    const handleToVerify = (user) => {
        const currentUser = {
            verify: true
        }
        fetch(`https://cricket-lover-server-site-s-m-zubayer.vercel.app/user/${user?.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem('Cricket-Lover', data.token);
                toast.success('User Verified successfully')

            })
    }

    return (
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

            <td>{user.email}</td>
            <td>{user.date}</td>
            <td><button onClick={() => handleToVerify(user)} className="px-2 py-1 bg-lime-200 rounded-lg">Verify</button> </td>
            <td><button onClick={() => handleToDelete(user)} className="px-2 py-1 bg-red-300 rounded-lg">Delete</button> </td>
        </tbody>
    );
};

export default EachSeller;