import userEvent from '@testing-library/user-event';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    let location = useLocation();

    // {
    //     user.email?children:<Navigate to='/login' state={{from:location}}></Navigate>
    // }
    if (user.email) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;