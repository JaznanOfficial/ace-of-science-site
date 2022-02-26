import React from "react";
import book from "./book-icon.png";

import ScrollToTop from "react-scroll-to-top";

import { Link } from "react-router-dom";
import "./AcdmClass.css";

import { subjectOfClass } from "../../dummydata";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function AcdmClass() {
    const classes = Object.keys(subjectOfClass);
    return (
        <section className="academic-class my-5">
            <ScrollToTop smooth color="#FE1A00" viewBox="0 0 250 250" />
            <Container>
                <h1>Academic Classes</h1>
                <Row xs={1} md={3} className="g-4 my-3">
                    {classes.map((classvalue, key) => (
                        <Col className="my-0">
                            <Link to={"/academicclass/" + classvalue} key={key}>
                                <Card className="card-1 rounded-3 border border-light d-flex flex-row justify-content-center align-items-center px-2">
                                    <div className="image-div-1 d-flex justify-content-center align-items-center">
                                        <img src={book} alt="" width={48} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>
                                            <h2>Class {classvalue}</h2>
                                        </Card.Title>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
