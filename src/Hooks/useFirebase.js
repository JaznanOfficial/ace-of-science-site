import React, { useEffect, useState } from "react";
import { getAuth,GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializeConfig from "../Firebase/Firebase.init";

initializeConfig();

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const githubProvider =  new GithubAuthProvider();
    const [user, setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true)

    const signinUsingGoogle = () => {
        // console.log("signing in...");
        return signInWithPopup(auth, provider);
    };

    const signinUsingGithub = () => {
        
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
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
        isLoading,
        setIsLoading,
        signinUsingGithub,
    };
};

export default useFirebase;
