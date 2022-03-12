import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import "./Profile.css";

const Profile = () => {
    const [show, setShow] = useState(false);

    const form = useRef();
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    const saveChange = (e) => {
        e.preventDefault();
        Swal({
            title: "Good job!",
            text: "Your message successfully sent! Please check your email",
            icon: "success",
        });
    };
    return (
        <div className="profile">
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-xl-6 col-md-12">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                {" "}
                                                <img
                                                    src="https://img.icons8.com/bubbles/100/000000/user.png"
                                                    className="img-radius"
                                                    alt="User-Profile-Image"
                                                />{" "}
                                            </div>
                                            <h6 className="f-w-600">Hembo Tingor</h6>
                                            <p>Web Designer</p>{" "}
                                            <i
                                                variant="primary"
                                                type="button"
                                                onClick={handleShow}
                                                className="fas fa-edit text-light pe-auto"
                                            ></i>
                                            <Modal show={show} onHide={handleClose} centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Edit Your Profile</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="right">
                                                        <form action="#" ref={form}>
                                                            <div className="fields">
                                                                <div className="field me-1">
                                                                    <input
                                                                        type="address"
                                                                        placeholder="Address"
                                                                        name="address"
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <input
                                                                    type="text"
                                                                    placeholder="School Name"
                                                                    name="school"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="field">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Profession"
                                                                    name="profession"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="field">
                                                                <input
                                                                    type="number"
                                                                    placeholder="Your Phone Number"
                                                                    name="phone-number"
                                                                    optional
                                                                />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button
                                                        variant="secondary"
                                                        onClick={handleClose}
                                                    >
                                                        Close
                                                    </Button>
                                                    <Button
                                                        variant="primary"
                                                        onClick={(saveChange, handleClose)}
                                                    >
                                                        Save Changes
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                                                Information
                                            </h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">
                                                        rntng@gmail.com
                                                    </h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Phone</p>
                                                    <h6 className="text-muted f-w-400">
                                                        98979989898
                                                    </h6>
                                                </div>
                                            </div>
                                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                                                Address
                                            </h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Home</p>
                                                    <h6 className="text-muted f-w-400">
                                                        Sam Disuja
                                                    </h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">School</p>
                                                    <h6 className="text-muted f-w-400">
                                                        Dinoter husainm
                                                    </h6>
                                                </div>
                                            </div>
                                            <ul className="social-link list-unstyled m-t-40 m-b-10">
                                                <li>
                                                    <a
                                                        href="#!"
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        title=""
                                                        data-original-title="facebook"
                                                        data-abc="true"
                                                    >
                                                        <i
                                                            className="mdi mdi-facebook feather icon-facebook facebook"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#!"
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        title=""
                                                        data-original-title="twitter"
                                                        data-abc="true"
                                                    >
                                                        <i
                                                            className="mdi mdi-twitter feather icon-twitter twitter"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#!"
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        title=""
                                                        data-original-title="instagram"
                                                        data-abc="true"
                                                    >
                                                        <i
                                                            className="mdi mdi-instagram feather icon-instagram instagram"
                                                            aria-hidden="true"
                                                        ></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
