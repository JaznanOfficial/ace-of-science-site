import React, { createContext, useContext } from 'react';

const useAuth = () => {
    return (
        useContext(createContext())
    );
};

export default useAuth;