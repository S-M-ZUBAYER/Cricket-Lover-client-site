import React from 'react';

const EachBuyer = ({ user, handleToDelete }) => {
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
            {/* <td>
            Zemlak, Daniel and Leannon
            <br />
            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td> */}
            <td>{user.email}</td>
            <td>{user.date}</td>
            {/* <td><button className="px-2 py-1 bg-lime-200 rounded-lg">Verify</button> </td> */}
            <td><button onClick={() => handleToDelete(user)} className="px-2 py-1 bg-red-300 rounded-lg">Delete</button> </td>
        </tbody>
    );
};

export default EachBuyer;