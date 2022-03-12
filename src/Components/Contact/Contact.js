import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import swal from "sweetalert";
import Swal from "sweetalert2";
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ijfpemq",
                "template_ghfeodq",
                form.current,
                "user_7cU7ocfO7vkpe6oV8FYWi"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    swal({
                        title: "Good job!",
                        text: "Your message successfully sent! Please check your email",
                        icon: "success",
                    });
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                    Swal({
                        title: "Oops!",
                        text: `{error.text}`,
                        icon: "warning",
                    });
                    e.target.reset();
                }
            );
    };
    return (
        <div>
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contact us</h2>
                    <div className="contact-content d-lg-flex flex-lg-row flex-sm-column justify-content-center align-items-center mt-5">
                        <div className="column left w-100 mx-3">
                            <div className="text">Get in Touch</div>
                            <p className="text-center">In any purpose you can contact with me</p>
                            <div className="icons ms-3 text-start">
                                <div className="row-icon">
                                    <div>
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="info">
                                        <div className="head">Name</div>
                                        <div className="sub-title">Ace Of Science</div>
                                    </div>
                                </div>
                                <div className="row-icon">
                                    <div>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="info">
                                        <div className="head">Address</div>
                                        <div className="sub-title">Chittagong, Bangladesh</div>
                                    </div>
                                </div>
                                <div className="row-icon">
                                    <div>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title">dev.aceofscience@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right w-100 mx-3">
                            <div className="text">Message us</div>
                            <form action="#" onSubmit={sendMail} ref={form}>
                                <div className="fields">
                                    <div className="field name">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            required
                                        />
                                    </div>
                                    <div className="field email">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        name="subject"
                                        required
                                    />
                                </div>
                                <div className="field textarea">
                                    <textarea
                                        cols="30"
                                        rows="10"
                                        placeholder="Message.."
                                        name="message"
                                        required
                                    ></textarea>
                                </div>
                                <div className="button-area">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
