import React from "react";
import "./Footer.css";
import logo from "./ace-of-science.png";
import Typical from 'react-typical'

const Footer = () => {
    return (
        
            <div className="footer">
                <div className="d-lg-flex flex-row justify-content-center align-items-center py-5 px-3">
                    <div>
                        <img src={logo} alt="img not found" width={300} />
                    </div>
                    <div className="ms-3 ps-3 footer-right">
                        <strong>
                            <h4 className="text-start">
                                AOS is a online guideline platform for secondary and higher
                                secondary students.We help students to learn their subjects easily,
                                provide online classes, taking online exams ,giving hand notes and
                                so on.
                            </h4>
                        </strong>
                    </div>
                </div>
                <div className="footer-bottom mx-auto d-flex justify-content-center">
                © All rights reserved by  <strong className="ms-1"><Typical
                steps={['ACE OF SCIENCE', 1000, '', 500]}
                loop={Infinity}
                
              />
                </strong>
                </div>
            </div>
        
    );
};

export default Footer;
