import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import './SingleNotes.css'

const SingleNotes = () => {

    const [getNotes, setGetNotes] = useState([]);
    useEffect(() => {
        fetch("https://warm-citadel-00877.herokuapp.com/notes")
            .then((res) => res.json())
            .then((data) => {
                setGetNotes(data);
            });
    }, []);

    // console.log(getBlogs);
    const reverseNotes = [...getNotes].reverse();
    return (
        <div className="single-note">
            <Row xs={1} md={4} className="g-2">
                {
                    reverseNotes.map(notes => (
                        <Col
                    key={notes._id}
                    >
                        <a href={notes.pdfLink} target='_blank'>
                        <Card className="overflow-hidden p-1 border shadow">
                        <Card.Body className="d-flex flex-row justify-content-center align-items-center text-decoration-none p-0">
                        <h2>
                            <i class="fa-solid fa-file-pen mx-3 text-danger"></i>
                        </h2>
                            <h6 className="me-1">
                            {notes.text}
                            
                            </h6>
                            </Card.Body>
                        </Card>
                        </a>
                    </Col>))
                }
                    
        
            </Row>
        </div>
    );
};

export default SingleNotes;
