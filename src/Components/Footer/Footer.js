import React from "react";
import "./Footer.css";
import logo from "./ace-of-science.png";
import Typical from "react-typical";

const Footer = () => {
    return (
        <div className="footer">
            <div className="d-lg-flex flex-row-reverse justify-content-center align-items-center py-5 px-3">
                
                <div className="ms-3 footer-right">
                    <strong>
                        <h4 className="text-start">
                            AOS is a online guideline platform for secondary and higher secondary
                            students.We help students to learn their subjects easily, provide online
                            classes, taking online exams ,giving hand notes and so on.
                        </h4>
                    </strong>
                </div>
                <div className="footer-left text-start">
                    <img src={logo} alt="img not found" width={300} />
                    <div className="rights-div">
                        © All rights reserved by{" "}
                        <strong className="ms-1">
                            <Typical className='d-inline' steps={["ACE OF SCIENCE", 1000, "", 500]} loop={Infinity} />
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
