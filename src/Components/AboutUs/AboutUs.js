import React from "react";
import "./AboutUs.css";
import { Card, Col, Row } from "react-bootstrap";

const AboutUs = () => {
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
                                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                                alt=""
                                class="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white py-5">
                <div class="container py-5">
                    <div class="row align-items-center">
                        <div class="col-lg-5 px-5 mx-auto">
                            <img
                                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                                alt=""
                                class="img-fluid mb-4 mb-lg-0"
                            />
                        </div>
                        <div class="col-lg-6">
                            <i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 class="font-weight-light">Lorem ipsum dolor sit amet</h2>
                            <p class="font-italic text-muted mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a
                                href="#"
                                class="btn btn-light px-5 rounded-pill shadow-sm text-light"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="team bg-light py-5">
                <div class="container py-5">
                    <div class="row mb-4 justify-content-center align-items-center">
                        <div class="col-lg-5">
                            <h2 class="display-4 font-weight-light text-danger">Our team</h2>
                            <p class="font-italic text-muted">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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
                                <h5 class="mb-0">Manuella Nevoresky</h5>
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
