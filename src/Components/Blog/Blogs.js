import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./Blog.css";

const Blogs = () => {
    return (
        <div className="container my-5">
            <div className="my-5 h-100">
                <h1 className="text-danger">Featured Blog</h1>

                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <SwiperSlide>
                                <Card className="d-lg-flex flex-lg-row justify-content-center align-items-center p-3 text-start ">
                                    <div>
                                        <img
                                            src="https://thumbs.dreamstime.com/b/freedom-concept-silhouettes-broken-chain-birds-flying-sky-180470108.jpg"
                                            className="swiper-image rounded"
                                            alt="img not found"
                                        />
                                    </div>
                                    <div>
                                        <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as
                                                a natural lead-in to additional content. This
                                                content is a little bit longer.
                                            </Card.Text>
                                        </Card.Body>
                                        
                                    </div>
                                    <strong className="mb-3 text-center">
                                            <a href="#" className="see-more">
                                                See More <i class="fas fa-arrow-circle-right"></i>{" "}
                                            </a>
                                        </strong>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Row>
                </Swiper>
            </div>

            <h1 className="text-danger">Blogs</h1>

            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <Card className="shadow">
                            <Card.Img
                                variant="top"
                                src="https://thumbs.dreamstime.com/b/freedom-concept-silhouettes-broken-chain-birds-flying-sky-180470108.jpg"
                                className="m-3"
                            />
                            <Card.Body>
                                <h3>Card title</h3>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                            <strong className="mb-3">
                                <a href="#" className="see-more">
                                    See More <i class="fas fa-arrow-circle-right"></i>{" "}
                                </a>
                            </strong>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Blogs;
