import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
// import useAdmin from '../Hooks/UseAdmin';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    // const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        <li><Link to='/dashboard/orders'>My Orders</Link></li>
                        <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add A product </Link></li>
                        <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                        <li><Link to='/dashboard/myBuyers'>My buyers</Link></li>
                        <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>


                        <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                        {/* {
                            isAdmin && <>
                                <li><Link to='/dashboard/allUsers'>All Users</Link></li>
                                <li><Link to='/dashboard/addDoctor'>Add A Doctor</Link></li>
                                <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                            </>
                        } */}
                    </ul>
                    <Link to='/'>
                        <button className='px-8 py-3 font-semibold text-lg rounded bg-red-300'>
                            Back to homepage
                        </button>
                    </Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;