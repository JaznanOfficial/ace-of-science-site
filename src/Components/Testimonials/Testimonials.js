import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Testimonial.css";

const Testimonials = () => {
    return (
        <div className="mt-5">
            <section className="home-testimonial p-5">
                <h2 className="pt-5">Explore the students experience</h2>

                <Row xs={1} md={3} className="g-4 mt-5">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    "This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer."
                                </Card.Text>
                            </Card.Body>
                            <img
                                variant="top"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GcwgE8P_j_I5SQBXQNrtxp31bk0fkNdFEA&usqp=CAU"
                                alt="img not found"
                                className="mx-auto"
                            />
                            <Card.Title>Card title</Card.Title>
                            <p>profession</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    "This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer."
                                </Card.Text>
                            </Card.Body>
                            <img
                                variant="top"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GcwgE8P_j_I5SQBXQNrtxp31bk0fkNdFEA&usqp=CAU"
                                alt="img not found"
                                className="mx-auto"
                            />
                            <Card.Title>Card title</Card.Title>
                            <p>profession</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    "This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer."
                                </Card.Text>
                            </Card.Body>
                            <img
                                variant="top"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GcwgE8P_j_I5SQBXQNrtxp31bk0fkNdFEA&usqp=CAU"
                                alt="img not found"
                                className="mx-auto"
                            />
                            <Card.Title>Card title</Card.Title>
                            <p>profession</p>
                        </Card>
                    </Col>
                </Row>
            </section>
        </div>
    );
};

export default Testimonials;
