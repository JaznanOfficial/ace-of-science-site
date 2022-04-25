import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navigation.css";
import siteLogo from "./ace-of-science.png";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <img
                        src={siteLogo}
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav justify-content-between">
                        <Nav className="ms-auto justify-content-center align-items-center">
                            <Link to="/">Home</Link>
                            <Link to="blog">Blog</Link>
                            <Link to="notes">Notes</Link>
                            <Link to="contact">Contact</Link>
                            <Link to='about'>About Us</Link>
                            {user?.auth && <Link to="/review">Review us</Link>}

                            {user?.auth ? (
                                <Link to={`/profile?uid=${user?.uid}`} className="m-2 border-2">
                                    <img src={user.photoURL} className="user-img"></img>
                                </Link>
                            ) : (
                                <Link to="sign-in">
                                    <Button className="login">Log in</Button>
                                </Link>
                            )}
                            {user?.auth && (
                                <Button onClick={logOut} className="login">
                                    Log Out
                                </Button>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
