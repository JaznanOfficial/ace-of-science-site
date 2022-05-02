import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutUs.css";
import { Card, Col, Row } from "react-bootstrap";
import aboutSvg from './about.svg'
import aboutTwo from './about-two.svg'

const AboutUs = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div>
            <div class="">
                <div class="container py-5">
                    <div class="row h-100 align-items-center py-5">
                        <div class="col-lg-6">
                            <h1 class="display-4 text-danger">About us</h1>
                            <p class="lead text-muted mb-0">
                                Welcome to growing kingdom of science
                            </p>
                            <h3 class="text-secondary">Ace Of Science</h3>
                        </div>
                        <div class="col-lg-6 d-none d-lg-block">
                            <img
                                src={aboutSvg}
                                alt=""
                                class="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white py-5" data-aos="zoom-out-right">
                <div class="container py-5">
                    <div class="row align-items-center">
                        <div class="col-lg-5 px-5 mx-auto">
                            <img
                                src={aboutTwo}
                                alt=""
                                class="img-fluid mb-4 mb-lg-0"
                            />
                        </div>
                        <div class="col-lg-6">
                            <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 class="font-weight-light text-danger">AOS: Begin the journey</h2>
                            <p class="font-italic text-muted mb-4 text-start">
                            Hey there, 
                            I am Abdulla Al Mamun Tusher. I would like to describe myself as an undergraduate student at the University of Chittagong. As a student of theoretical Physics,CU has taught me a lot. 
                            My journey of Chittagong started in 2019. This was a remarkable year for me. Back then  I got a chance to teach secondary and higher secondary students in a coaching center for the first time. From then on I realized that I have a great power of interacting with people and they could understand my lectures easily. Through the coaching center, I have noticed that most of the students having hard times learning and understanding various topics, so I thought to myself, I should use my talent here. I strongly believe, memorizing the answers to get good grades is draining of our merit, the learning process shouldn't be like that.  <br /><br />
                            
                            So, I decided to start a platform called "Ace of Science -AOS " in order to provide quality education by developing a true interest in learning science. Alhamdulillah, this platform enhancing day by day. Numerous students from all over Bangladesh are connecting with us. That's why it is our motto, "Feel free to learn, spread what you have learned". 
                            In-sa-Allah the medium of learning and teaching will be easier with us.......
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="team bg-light py-5" data-aos="fade-up"
            data-aos-duration="3000">
                <div class="container py-5">
                    <div class="row mb-4 justify-content-center align-items-center">
                        <div class="col-lg-5">
                            <h2 class="display-4 font-weight-light text-danger">Meet Our team</h2>
                            <p class="font-italic text-muted">
                        <hr className="text-danger fs-1 fw-bolder" />
                            </p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <div class="ceo-div col-xl-3 col-sm-12 mb-5">
                            <div class="bg-white rounded shadow-lg py-5 px-4">
                                <img
                                    src="https://i.ibb.co/bJQVT0x/278663867-746682786491458-7016518618669044559-n.jpg"
                                    alt=""
                                    width="100"
                                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                />
                                <h5 class="mb-0">Abdulla Al Mamun Tusher</h5>
                                <span class="small text-uppercase text-muted">ceo & founder of aos</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item">
                                        <a href="https://www.facebook.com/abdulla.mamun.7311" class="social-link">
                                            <i class="fa fa-facebook-f"></i>
                                        </a>
                                    </li>

                                    <li class="list-inline-item">
                                        <a href="aamtusher01@gmail.com" class="social-link">
                                            <i class="fa-solid fa-at"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://t.me/AbdullaMamun001" class="social-link">
                                        <i class="fa-brands fa-telegram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row text-center justify-content-center align-items-center">
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-lg py-5 px-4">
                                <img
                                    src="https://i.ibb.co/mcv87Fb/profile-1-removebg-preview-2.png"
                                    alt=""
                                    width="100"
                                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                />
                                <h5 class="mb-0">Md Abdur Rahman</h5>
                                <span class="small text-uppercase text-muted">
                                    Lead Developer of AOS
                                </span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item">
                                        <a
                                            href="https://www.facebook.com/mdabdurrahman30/"
                                            target="_blank"
                                            class="social-link"
                                        >
                                            <i class="fa fa-facebook-f"></i>
                                        </a>
                                    </li>

                                    <li class="list-inline-item">
                                        <a
                                            href="mailto:jaznanofficial@gmail.com"
                                            target='_blank'
                                            class="social-link"
                                        >
                                            <i class="fa-solid fa-at"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a
                                            href="https://www.linkedin.com/in/jaznanofficial/"
                                            target='_blank'
                                            class="social-link"
                                        >
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-lg py-5 px-4">
                                <img
                                    src="https://i.ibb.co/HxBMwQK/249258341-193746306241797-7825219781366502693-n.jpg"
                                    alt=""
                                    width="100"
                                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                />
                                <h5 class="mb-0">Shamima Akter</h5>
                                <span class="small text-uppercase text-muted">MERN Stack Developer</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item">
                                        <a href="https://www.facebook.com/nizum.nizum.1481" target='_blank' class="social-link">
                                            <i class="fa fa-facebook-f"></i>
                                        </a>
                                    </li>

                                    <li class="list-inline-item">
                                        <a href="mailto:nijumdip019911@gmail.com" class="social-link">
                                            <i class="fa-solid fa-at"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="social-link">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-lg py-5 px-4">
                                <img
                                    src="https://i.ibb.co/JrgML6V/278980530-519026103066319-8309659636507363290-n.jpg"
                                    alt=""
                                    width="100"
                                    class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                />
                                <h5 class="mb-0">Hasib Nadim</h5>
                                <span class="small text-uppercase text-muted">Backend Developer</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item">
                                        <a href="https://www.facebook.com/hasibnadimx" target='_blank' class="social-link">
                                            <i class="fa fa-facebook-f"></i>
                                        </a>
                                    </li>

                                    <li class="list-inline-item">
                                        <a href="mailto:hasibnadim0@gmail.com" target='_blank' class="social-link">
                                            <i class="fa-solid fa-at"></i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="https://www.linkedin.com/in/hasibnadim" target='_blank' class="social-link">
                                            <i class="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
