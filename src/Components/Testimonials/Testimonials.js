import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Testimonial.css";

const Testimonials = () => {
    return (
        <div className="my-5">
            <section class="home-testimonial">
                <div class="container-fluid">
                    <div class="row d-flex justify-content-center testimonial-pos">
                        <div class="col-md-12 pt-4 d-flex justify-content-center">
                            <h3>Testimonials</h3>
                        </div>
                        <div class="col-md-12 d-flex justify-content-center">
                            <h2>Explore the students experience</h2>
                        </div>
                    </div>
                    
                        <div class="container testimonial-inner">
                            <Row xs={1} md={3} className="g-4">
                                <Col>
                                    <div class="tour-item">
                                        <div class="tour-desc bg-white shadow-lg">
                                            <div class="tour-text color-grey-3 text-center">
                                                “At this School, our mission is to balance a
                                                rigorous comprehensive college preparatory
                                                curriculum with healthy social and emotional
                                                development.”
                                            </div>
                                            <div class="d-flex justify-content-center pt-2 pb-2">
                                                <img
                                                    class="tm-people"
                                                    src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="link-name d-flex justify-content-center">
                                                Balbir Kaur
                                            </div>
                                            <div class="link-position d-flex justify-content-center">
                                                Student
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="tour-item ">
                                        <div class="tour-desc bg-white shadow-lg">
                                            <div class="tour-text color-grey-3 text-center">
                                                “At this School, our mission is to balance a
                                                rigorous comprehensive college preparatory
                                                curriculum with healthy social and emotional
                                                development.”
                                            </div>
                                            <div class="d-flex justify-content-center pt-2 pb-2">
                                                <img
                                                    class="tm-people"
                                                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="link-name d-flex justify-content-center">
                                                Balbir Kaur
                                            </div>
                                            <div class="link-position d-flex justify-content-center">
                                                Student
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div class="tour-item ">
                                        <div class="tour-desc bg-white shadow-lg">
                                            <div class="tour-text color-grey-3 text-center">
                                                “At this School, our mission is to balance a
                                                rigorous comprehensive college preparatory
                                                curriculum with healthy social and emotional
                                                development.”
                                            </div>
                                            <div class="d-flex justify-content-center pt-2 pb-2">
                                                <img
                                                    class="tm-people"
                                                    src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="link-name d-flex justify-content-center">
                                                Balbir Kaur
                                            </div>
                                            <div class="link-position d-flex justify-content-center">
                                                Student
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                  
                </div>
            </section>
        </div>
    );
};

export default Testimonials;
