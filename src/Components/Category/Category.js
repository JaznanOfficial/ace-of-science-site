import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Category.css";
import book from "./book-icon.png";
import skill from "./skill-icon.png";
import hat from "./hat-icon.png";

const Category = () => {
    return (
        <div className="container my-5">
            <div className="text-start mb-4">
                {" "}
                <h1>Choice classes from categories</h1>
            </div>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <a href="">
                        <Card className="card-1 rounded-3 border border-light d-flex flex-row justify-content-center align-items-center px-2">
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
                    </a>
                </Col>
                <Col>
                    <a href="">
                        <Card className="card-2 rounded-3 border border-light d-flex flex-row justify-content-center align-items-center px-2">
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
                    </a>
                </Col>
                <Col>
                    <a href="">
                        <Card className="card-3 rounded-3 border border-light d-flex flex-row justify-content-center align-items-center px-2">
                            <div className="image-div-3 d-flex justify-content-center align-items-center">
                                <img src={hat} alt="" width={48} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <h2>Another</h2>
                                    <h4>Another topics12</h4>
                                </Card.Title>
                                
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </div>
    );
};

export default Category;
