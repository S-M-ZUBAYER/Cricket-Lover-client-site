import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import DisplaySpinner from '../../components/Sprinners/DisplaySpinner/DisplaySpinner'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <DisplaySpinner></DisplaySpinner>
    }

    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
}

export default PrivateRoute