import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Api/Hooks/UseAdmin';
import DisplaySpinner from '../../components/Sprinners/DisplaySpinner/DisplaySpinner';
import { AuthContext } from '../../context/AuthProvider';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <DisplaySpinner></DisplaySpinner>
    }
    if (user && isAdmin) {
        return children;

    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;