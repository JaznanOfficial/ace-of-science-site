import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonial.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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



                <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                
                        {ratings.slice(0, 3).map((rating) => (
                  
                <SwiperSlide className="card">
                    
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
            
                                </SwiperSlide>

            ))}
                
 
              </Swiper>

                
                    
            </section>
        </div>
    );
};

export default Testimonials;
