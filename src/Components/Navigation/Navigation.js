import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navigation.css";
import siteLogo from "./ace-of-science.png";

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark">
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
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Magazine</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                            <Button className="login">Log in</Button>
                            <NavDropdown
                                title={<i class="far fa-user-circle fs-5"></i>}
                                id="collasible-nav-dropdown"
                                className="p-0 border-2"
                            >
                                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">My Subject</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Another topic
                                </NavDropdown.Item>
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
