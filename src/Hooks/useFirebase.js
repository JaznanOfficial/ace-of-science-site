import React, { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializeConfig from "../Firebase/Firebase.init";

initializeConfig();

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState({});

    const signinUsingGoogle = () => {
        // console.log("signing in...");
        return signInWithPopup(auth, provider);
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                
             });
    };
    return {
        user,
        signinUsingGoogle,
        logOut,
    };
};

export default useFirebase;
