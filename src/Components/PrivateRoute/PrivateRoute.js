import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user,isLoading } = useAuth();
    let location = useLocation();
    let [color, setColor] = useState("#ffffff");

    if (isLoading) {
        return <HashLoader color={color} loading={isLoading} size={150} />
    }

    // {
    //     user.email?children:<Navigate to='/login' state={{from:location}}></Navigate>
    // }
    // if (user) {
    //     return children;
    // }
    // return <Navigate to='/sign-in' state={{from: location}}></Navigate>
    return user.auth? children : <Navigate to='/sign-in' state={{from: location}}></Navigate>
};

export default PrivateRoute;