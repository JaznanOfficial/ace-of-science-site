import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Category.css";
import book from "./book-icon.png";
import skill from './skill-icon.png';
import hat from './hat-icon.png'

const Category = () => {
    return (
        <div className="container my-3">
            <div className="text-start">
                {" "}
                <h1>Choice favourite class from category</h1>
            </div>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card>
                        <img src={book} alt="" width={48} className="ms-5 mt-3" />
                        <Card.Body className="text-start">
                            <Card.Title>
                                <h3>Academic</h3>
                                <h5>Class 1-12</h5>
                            </Card.Title>
                            <Card.Text>
                                Learn your academic science classes with a lot of experienced and
                                skilled teacher with fun and enjoy.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <img src={skill} alt="" width={48} className="ms-5 mt-3" />
                        <Card.Body className="text-start">
                            <Card.Title>
                                <h3>Skill Based</h3>
                                <h5>Skill development topics</h5>
                            </Card.Title>
                            <Card.Text>
                                Learn your skill development topics with a lot of experienced and
                                skilled teacher with fun and enjoy.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <img src={hat} alt="" width={48} className="ms-5 mt-3" />
                        <Card.Body className="text-start">
                            <Card.Title>
                                <h3>Another</h3>
                                <h5>Another topics12</h5>
                            </Card.Title>
                            <Card.Text>
                                Learn your academic science classes with a lot of experienced and
                                skilled teacher with fun and enjoy.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Category;
