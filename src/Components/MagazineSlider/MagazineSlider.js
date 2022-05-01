import React from "react";
import "./MagazineSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Button } from "react-bootstrap";

const MagazineSlider = () => {
    // const responsive = {
    //     height:'300px',
    //     '@media only screen and (max-width:350px)' :{
    //           width: '150px',
    //           height: '200px'

    //     }
    // }

    return (
        <div className="my-3 magazine py-5 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="magazine-title px-3 mb-3 text-start">
                        <h1>Latest Magazine</h1>
                        <h6>Coming soon...</h6>
                    </div>
                </div>

                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        360: {
                            width: 350,
                            slidesPerView: 1.5,
                            height: 50,
                        },
                        640: {
                            width: 640,
                            slidesPerView: 3,
                            height: 50,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 1200,
                            slidesPerView: 3,
                        },
                    }}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {/* <SwiperSlide className="swiper-slide">
                        <a href="logo512.png" download>
                            <img
                                src="https://i.ibb.co/b75jrgN/screencapture-jaznanofficial-github-io-mouse-food-house-2022-01-17-09-21-51.png"
                                height={"300px"}
                            />
                        </a>
                    </SwiperSlide> */}
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default MagazineSlider;
