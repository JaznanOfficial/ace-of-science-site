import React from "react";
import { Button } from "react-bootstrap";
import "./HeaderBanner.css";
import bannerImg from "./header-img.png";

const HeaderBanner = () => {
  return (
    <div className="header py-3">
      <div className="container d-lg-flex flex-row-reverse justify-content-between align-items-center">
        <div>
          <img src={bannerImg} alt="img not found" width="100%" />
        </div>
        <div className="text-dark text-start left-header ms-3">
          <h1>
            LEARN MORE ABOUT <br />
            SCIENCE AND MAKE <br /> SUCCESS THE RESULT OF PERFECTION.
          </h1>
          <Button className="mt-3">
            <h5 className="m-0">Let's begin</h5>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
