import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import './SingleNotes.css'

const SingleNotes = () => {
    return (
        <div className="single-note">
            <Row xs={1} md={4} className="g-2">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <a href="">
                        <Card className="overflow-hidden p-1">
                        <Card.Body className="d-flex flex-row justify-content-center align-items-center text-decoration-none p-0">
                        <h2>
                            <i class="fa-solid fa-file-pen mx-3"></i>
                        </h2>
                            <p className="me-1">
                            This is a longer card with supporting text below as a natural
                            
                            </p>
                            </Card.Body>
                        </Card>
                        </a>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default SingleNotes;
