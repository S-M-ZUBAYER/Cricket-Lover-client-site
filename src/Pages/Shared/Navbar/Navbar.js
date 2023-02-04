import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
// import img from '../../assets/img/logo.jpg'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <div className="sticky top-0 z-40">
            <div className="navbar text-slate-400 bg-gradient-to-t from-blue-900 via-slate-900 to-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl"><img className="w-8 h-8 rounded-xl mr-2" src='https://i.ibb.co/LCFZm0g/Cricket-Lovere.webp' ></img>Cricket Lover</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                {/* <input type="checkbox" className="toggle toggle-sm ml-10" checked /> */}
                <div className="navbar-end ">
                    {user?.uid ?
                        <>
                            <img title={user.displayName} className="w-8 h-8 rounded-2xl mr-2" src={user?.photoURL} ></img>
                            <button onClick={() => logout()} className="btn-small px-3 py-1 rounded-tl-xl rounded-br-xl bg-gradient-to-t from-orange-400 via-amber-300 to-lime-300 text-black lg:mr-3">Log Out</button>
                        </> :
                        <Link to='/login' className="btn-small px-3 py-1 rounded-tl-xl rounded-br-xl bg-gradient-to-t from-lime-400 via-teal-300 to-emerald-600 text-black lg:mr-3">Log In</Link>
                    }


                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </label>
            </div>

        </div>
    );
};

export default Navbar;