import React, { useEffect, useState } from "react";
import { getAuth,GithubAuthProvider, GoogleAuthProvider,FacebookAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import initializeConfig from "../Firebase/Firebase.init";

initializeConfig();

const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const [user, setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true)

    const signinUsingGoogle = () => {
        // console.log("signing in...");
        return signInWithPopup(auth, provider);
    };

    const signinUsingGithub = () => {
        
        return signInWithPopup(auth, githubProvider)
    }

    const signinUsingFacebook = () => {
        return signInWithPopup(auth,facebookProvider)
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
        signinUsingFacebook,
    };
};

export default useFirebase;
