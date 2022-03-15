import React from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Signin.css";

const Signin = () => {
    const { signinUsingGoogle, setIsLoading, signinUsingGithub,signinUsingFacebook, user,setUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const navigateUrl = location?.state?.from || "/home";

    const GoogleSignin = () => {
        signinUsingGoogle()
            .then((result) => {
                console.log(result)
                navigate(navigateUrl);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const githubSignin = () => {
        signinUsingGithub()
            .then((result) => {
               console.log(result)
                navigate(navigateUrl);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const facebookSignin = () => {
        signinUsingFacebook()
        .then((result) => {
            console.log(result)
             navigate(navigateUrl);
         })
         .finally(() => {
             setIsLoading(false);
         });
    }

    return (
        <div className="signin d-flex justify-content-center align-items-center mx-auto">
            <div className="signin-card p-3 m-3">
                <img
                    src="https://c.tenor.com/9Xf0d7BGQ5oAAAAC/computer-log-in.gif"
                    alt="img not found"
                    width="360px"
                />
                <div className="d-grid gap-2 mt-3 text-center">
                    <Button variant="primary" size="lg" onClick={GoogleSignin}>
                        <h5>
                            <i className="fab fa-google-plus"></i> Google
                        </h5>
                    </Button>
                    <Button variant="secondary" size="lg" className="github" onClick={githubSignin}>
                        <h5>
                            <i className="fab fa-github"></i> Github
                        </h5>
                    </Button>
                    <Button variant="secondary" size="lg" className="facebook" onClick={facebookSignin}>
                        <h5>
                            <i className="fa-brands fa-facebook"></i> Facebook
                        </h5>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Signin;
