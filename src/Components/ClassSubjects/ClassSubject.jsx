import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import book from '../AcademicClass/book-icon.png'

import ScrollToTop from "react-scroll-to-top";

import { subjectOfClass } from "../../dummydata";
import "./classsubject.css";

export default function ClassSubjects() {
  const { classnumber } = useParams();
  const subjects = subjectOfClass[classnumber];

  //rendering view variable
  // <Row xs={1} md={3} className="g-4 my-3"></Row>
  const subjectCard = subjects?.map((subj, key) => (
    <Col>
    <Link
      to={"/lesson?type=ac&class=" + classnumber + "&subject=" + subj.name}

      key={key}
    >
    <Card className="card-1 rounded-3 border border-light d-flex flex-row justify-content-center align-items-center px-2 shadow">
    <div className="image-div-1 d-flex justify-content-center align-items-center">
        <img src={book} alt="" width={48} />
    </div>
    <Card.Body>
        <Card.Title>
            <h2>{subj.name}</h2>
        </Card.Title>
    </Card.Body>
</Card>
      </Link>
      </Col>
  ));












  return (
    <section>
      <ScrollToTop smooth color="#FE1A00" viewBox="0 0 250 250" />

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
