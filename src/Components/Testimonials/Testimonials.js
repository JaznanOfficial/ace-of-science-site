import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import "./Testimonial.css";

const Testimonials = () => {
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        fetch("https://enigmatic-crag-58614.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setRatings(data));
    }, []);
   

    return (
        <div className="mt-5">
            <section className="home-testimonial p-5">
                <h2 className="pt-5">Explore the students experience</h2>

                <Row xs={1} md={3} className="g-4 mt-5">
                    {ratings.slice(0, 3).map((rating) => (
                        <Col>
                            <Card>
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <div>
                                    <Card.Text>"{rating.text.slice(0,250)}..."</Card.Text>
                                    </div>
                                    </Card.Body>
                                    <div className="mb-2 mx-lg-5 mx-3 text-center">
                                        <Rating
                                            className="text-danger"
                                            emptySymbol="fa fa-star-o"
                                            fullSymbol="fa fa-star"
                                            initialRating={rating.rating}
                                            readonly
                                        />
                                    </div>
                                <img
                                    variant="top"
                                    src={rating.photo}
                                    alt="img not found"
                                    className="mx-auto"
                                />
                                <Card.Title>{rating.name}</Card.Title>
                                <p>{rating.profession}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        </div>
    );
};

export default Testimonials;
