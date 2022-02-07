import React from "react";

import ScrollToTop from "react-scroll-to-top";
import MagazineSlider from "../MagazineSlider/MagazineSlider";
import { Link } from "react-router-dom";
import "./AcdmClass.css";
import HeaderBannerac from "../Header/HeaderBannerac";
import { subjectOfClass } from "../../dummydata";
import { Container } from "react-bootstrap";

export default function AcdmClass() {
  const classes = Object.keys(subjectOfClass);
  return (
    <section>
      <ScrollToTop smooth color="#FE1A00" viewBox="0 0 250 250" />
      <HeaderBannerac title="Academic Classes" />
      <Container>
        <div className="p-1 d-flex flex-wrap justify-content-center">
          {classes.map((classvalue, key) => (
            <Link
              className="card class_button"
              to={"/academicclass/" + classvalue}
              key={key}
            >
                <h5 class="card-title">Class {classvalue}</h5>
              
            </Link>
          ))}

        </div>
        <MagazineSlider></MagazineSlider>
      </Container>
    </section>
  );
}
