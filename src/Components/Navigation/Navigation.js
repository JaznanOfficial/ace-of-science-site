import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navigation.css";
import siteLogo from "./ace-of-science.png";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navigation = () => {
    const { user } = useAuth();
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
                            <Link to="contact">Contact</Link>
                            
                            {
                                user?.email?
                                <NavDropdown
                                title={<i className="far fa-user-circle fs-5"></i>}
                                id="collasible-nav-dropdown"
                                className="p-0 border-2"
                            >
                                <Link
                                    to="/profile"
                                    data-rr-ui-dropdown-item
                                    className="dropdown-item"
                                    role="button"
                                >
                                    Profile
                                </Link>

                                <Link
                                    to="/review"
                                    data-rr-ui-dropdown-item
                                    className="dropdown-item"
                                    role="button"
                                >
                                    Review us
                                </Link>

                                <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
                                    </NavDropdown> :
                                    <Link to="sign-in">
                                <Button className="login">Log in</Button>
                            </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
