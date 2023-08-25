import React from 'react'
import { useNavigate, Route, Navigate } from 'react-router-dom';


function AdminRouteGuard({ element }) {

    const navigate = useNavigate();

    const isAuthenticated = !!localStorage.getItem('TOKEN'); // Check if token exists
    const isAdmin = true; // Replace with your admin role check

    if (isAuthenticated && isAdmin) {
        return element;
    } else if (!isAuthenticated) {
        return <Navigate to="/login" />;
    } else {
        return <Navigate to="/" />; // Redirect to another route if not an admin
    }
}

export default AdminRouteGuard