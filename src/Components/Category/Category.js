import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Category.css";
import book from "./book-icon.png";
import skill from "./skill-icon.png";
import hat from "./hat-icon.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="container my-5" id="category">
      <div className="text-start mb-4">
        {" "}
        <h1>Choice classes from categories</h1>
      </div>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Link to="/academic-class">
            <Card className="card-1 rounded-3 border border-light d-flex flex-row justify-content-center align-items-center px-2 shadow">
              <div className="image-div-1 d-flex justify-content-center align-items-center">
                <img src={book} alt="" width={48} />
              </div>
              <Card.Body>
                <Card.Title>
                  <h2>Academic</h2>
                  <h4>Class 1-12</h4>
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="/skills">
            <Card className="card-2 rounded-3 border border-light d-flex flex-row justify-content-center align-items-center px-2 shadow">
              <div className="image-div-2 d-flex justify-content-center align-items-center">
                <img src={skill} alt="" width={48} />
              </div>
              <Card.Body>
                <Card.Title>
                  <h2>Skill Based</h2>
                  <h4>Skill development</h4>
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link to="others">
            <Card className="card-3 rounded-3 border border-light d-flex flex-row justify-content-center align-items-center px-2 shadow">
              <div className="image-div-3 d-flex justify-content-center align-items-center">
                <img src={hat} alt="" width={48} />
              </div>
              <Card.Body>
                <Card.Title>
                  <h2>Special</h2>
                  <h4>Special Subject</h4>
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Category;
