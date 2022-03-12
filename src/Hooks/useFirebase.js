import React, { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import initializeConfig from '../Firebase/Firebase.init';









initializeConfig();
const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});



    const signinUsingGoogle = () => {
        return signInWithPopup(auth, provider)
    }



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const signOut = () => {
        signOut(auth)
            .then(() => {
            
        })
    }




    return (
        user,
        signinUsingGoogle,
        signOut

    );
};

export default useFirebase;