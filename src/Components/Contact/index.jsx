import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";

import contactImg from './undraw_book_lover_re_rwjy.svg';



import "./contact.css";
export default function Contact() {
  const [sdrName, setSdrName] = useState("");
  const [sdrEmail, setSdrEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  var submitHandel = (e) => {
    e.preventDefault();
    alert(`info: ${sdrName} ${sdrEmail} ${subject} ${message}`)
  };
  return (
    <section>
      <div className="header py-3">
        <Container>
          <div className="text-dark text-start left-header ms-3">
            <h2>Contact Us</h2>
          </div>
        </Container>
      </div>
      <Container>
          <Row>
          <Col className="contact_img_col"  >
            <Image src={contactImg}></Image>
            </Col>
            <Col>
            
        <Form className="text-start" onSubmit={submitHandel}>
          <Form.Group className="mb-3" controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setSdrName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setSdrEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Subject">
            <textarea
              placeholder="Write Something..."
              className="border rounded p-1 w-100 contact_dec"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

            </Col>
         
        </Row>
      </Container>
    </section>
  );
}
