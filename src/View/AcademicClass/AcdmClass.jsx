import React from "react";

import ScrollToTop from "react-scroll-to-top";

import videoPleaceHolder from "./video-placeholder.png";
import { Link } from "react-router-dom";
import "./AcdmClass.css";
import HeaderBannerac from "../../Components/Header/HeaderBannerac";
import { subjectOfClass } from "../../dummydata";


export default function AcdmClass() {
  const classes = Object.keys(subjectOfClass);
  return (
    <section>
      <ScrollToTop smooth color="#FE1A00" viewBox="0 0 250 250" />
     <HeaderBannerac title="Academic Classes"/>
      <div className="container d-md-flex">
        <div className="p-1">
          {classes.map((classvalue, key) => (
            <Link className="d-flex align-items-center justify-content-start float-start class_button" to={"/academicclass/"+classvalue} key={key}>
              Class {classvalue}
            </Link>
          ))}
        </div>
        <div className="p-1">
          
          <img src={videoPleaceHolder} alt="" className="w-75" />
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            laborum dicta incidunt temporibus quia enim debitis architecto omnis
            veritatis fuga nisi quo a facere fugit perferendis, alias,
            voluptatem voluptates sapiente!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            laborum dicta incidunt temporibus quia enim debitis architecto omnis
            veritatis fuga nisi quo a facere fugit perferendis, alias,
            voluptatem voluptates sapiente!
          </p>
        </div>
      </div>
    
    </section>
  );
}
