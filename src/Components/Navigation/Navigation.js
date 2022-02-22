import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navigation.css";
import siteLogo from "./ace-of-science.png";
import { Link } from "react-router-dom";

const Navigation = () => {
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
                            <Link to="signin">
                                <Button className="login">Log in</Button>
                            </Link>
                            <NavDropdown
                                title={<i class="far fa-user-circle fs-5"></i>}
                                id="collasible-nav-dropdown"
                                className="p-0 border-2"
                            >
                                
                                    <Link to="/profile" data-rr-ui-dropdown-item class="dropdown-item" role="button">Profile</Link>
                                
                                
                                    <Link to="/review"  data-rr-ui-dropdown-item class="dropdown-item" role="button">Review us</Link>
                                
                                    
                                
                                <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;
