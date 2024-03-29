import React, { useRef, useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import "./Profile.css";

const Profile = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [show, setShow] = useState(false);
    console.log(user);
    const emailRef = useRef();
    const addressRef = useRef();
    const schoolRef = useRef();
    const professionRef = useRef();
    const phoneRef = useRef();

    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    const saveChange = (e) => {
        e.preventDefault();
        const userEmail = emailRef.current.value;
        const address = addressRef.current.value;
        const school = schoolRef.current.value;
        const profession = professionRef.current.value;
        const phone = phoneRef.current.value;
        const userUid = user?.uid;
        const profile = { userUid, userEmail, address, school, profession, phone };
        console.log(profile);

        fetch(`https://aos-server.onrender.com/profile?uid=${user?.uid}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(profile),
        }).then((res) => {
            new Swal({
                title: "Good job!",
                text: "Your profile is successfully updated. Please refresh to see update",
                icon: "success",
            });
            e.target.reset();
            handleClose();
        });
    };

    // getting profile data------------------------>
    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        fetch(`https://aos-server.onrender.com/profile?uid=${user?.uid}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("idToken")}`,
            },
        })
            .then((res) => {
                // if (res.status === 200) {
                return res.json();
                // }
                // else if (res.status === 401) {
                //     navigate('/sign-in')
                // }
            })
            .then((data) => setProfileData(data));
    }, []);
    console.log(profileData);
    const { address, phone, profession, school, userEmail } = profileData;

    return (
        <div className="profile">
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="container d-flex justify-content-center mt-3">
                        <div className="col-xl-6 col-md-12">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                {" "}
                                                <img
                                                    src={user.photoURL}
                                                    className="img-radius"
                                                    alt="img not found"
                                                />{" "}
                                            </div>
                                            <h4 className="f-w-600">{user.displayName}</h4>
                                            <p>{profession}</p>{" "}
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
                                                        <form action="#" onSubmit={saveChange}>
                                                            <div className="fields">
                                                                <div className="field me-1">
                                                                    <input
                                                                        type="email"
                                                                        placeholder="Email"
                                                                        name="address"
                                                                        ref={emailRef}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="fields">
                                                                <div className="field me-1">
                                                                    <input
                                                                        type="address"
                                                                        placeholder="Home Address"
                                                                        name="address"
                                                                        ref={addressRef}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="field">
                                                                <input
                                                                    type="text"
                                                                    placeholder="School Name"
                                                                    name="school"
                                                                    ref={schoolRef}
                                                                />
                                                            </div>
                                                            <div className="field">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Profession"
                                                                    name="profession"
                                                                    ref={professionRef}
                                                                />
                                                            </div>
                                                            <div className="field">
                                                                <input
                                                                    type="number"
                                                                    placeholder="Your Phone Number"
                                                                    name="phone-number"
                                                                    ref={phoneRef}
                                                                />
                                                            </div>
                                                            <Button variant="primary" type="submit">
                                                                Save Changes
                                                            </Button>
                                                        </form>
                                                    </div>
                                                </Modal.Body>
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
                                                        {userEmail}
                                                    </h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Phone</p>
                                                    <h6 className="text-muted f-w-400">{phone}</h6>
                                                </div>
                                            </div>
                                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                                                Address
                                            </h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Home</p>
                                                    <h6 className="text-muted f-w-400">
                                                        {address}
                                                    </h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">School</p>
                                                    <h6 className="text-muted f-w-400">{school}</h6>
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
