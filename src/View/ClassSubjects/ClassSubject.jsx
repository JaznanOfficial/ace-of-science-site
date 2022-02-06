import React from "react";
import { Link, useParams } from "react-router-dom";

import ScrollToTop from "react-scroll-to-top";
import HeaderBannerac from "../../Components/Header/HeaderBannerac";
import { subjectOfClass } from "../../dummydata";
import "./classsubject.css";

export default function ClassSubjects() {
  const { classnumber } = useParams();
  const subjects = subjectOfClass[classnumber];

  //rendering view variable
  const subjectCard = subjects?.map((subj, key) => (
    <div className="card sb_card m-2" key={key}>
      <div className="card-body">
        <h5 className="card-title">{subj.name}</h5>
        <p className="card-text">{subj.description}</p>
        <Link
          to={"/lesson?type=ac&class=" + classnumber + "&subject=" + subj.name}
          className="btn btn-primary"
        >
          Start lesson
        </Link>
      </div>
    </div>
  ));

  return (
    <section>
      <ScrollToTop smooth color="#FE1A00" viewBox="0 0 250 250" />
      <HeaderBannerac title="Select Subject" />
      <div className="container d-flex flex-wrap justify-content-center">
        {subjectCard || (
          <div class="alert alert-warning my-2" role="alert">
            Invalid Target Class
          </div>
        )}
      </div>

    </section>
  );
}
