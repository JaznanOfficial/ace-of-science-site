import React from "react";
import { Button } from "react-bootstrap";
import "./HeaderBanner.css";
import bannerImg from "./header-img.png";

const HeaderBanner = () => {
    return (
        <div className="header">
            <div className="container d-lg-flex flex-row-reverse justify-content-between align-items-center my-5">
                <div>
                    <img src={bannerImg} alt="img not found" width="100%" />
                </div>
                <div className="text-light">
                    <h3>
                        <strong>KING,QUEEN AND JACK</strong> of sciences <br />
                        all are here! <br />
                    </h3>
                    <h1 className="text-danger">Ace of Science!</h1>
                    <h3> yeahh...!</h3>
                    <Button variant="outline-warning" className="mt-3">
                        <h5>Let's begin</h5>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;
