import React, {useState, useEffect} from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Achievement.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Achievement = () => {

    const [getEvents, setGetEvents] = useState([]);
    useEffect(() => {
        fetch("https://warm-citadel-00877.herokuapp.com/event")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setGetEvents(data);
            });
    }, []);
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="container my-5 achievement" data-aos="fade-right">
            {
                getEvents.map(event => <div>
                    <div className="text-start mb-4">
                    {" "}
                    <h1 className="text-center">Our Events </h1>
                    <h1 className="text-center">
                        <strong className="text-danger">{event.heading}</strong>
                    </h1>
                </div>
                <Row xs={1} md={4} className="g-4">
                    
                            <Col>
                            <Card className="px-2">
                                <img
                                    variant="top"
                                    src={event.firstImage}
                                    className="mx-auto my-2 achievement-img"
                                    alt="img not found"

                                />
                                {/*  <Card.Body>
                                    <Card.Title>Achievement-1</Card.Title>
                                </Card.Body> */}
                            </Card>
                        </Col>
                        <Col>
                            <Card className="px-2">
                                <img
                                    variant="top"
                                    src={event.secondImage}
                                    className="mx-auto my-2 achievement-img"
                                    alt="img not found"
                                    width="88%"
                                    height="88%"
                                />
                                {/*  <Card.Body>
                                    <Card.Title>Achievement-1</Card.Title>
                                </Card.Body> */}
                            </Card>
                        </Col>
                        <Col>
                            <Card className="px-2">
                                <img
                                    variant="top"
                                    src={event.thirdImage}
                                    className="mx-auto my-2 achievement-img"
                                    alt="img not found"
                                    width="88%"
                                    height="88%"
                                />
                                {/*  <Card.Body>
                                    <Card.Title>Achievement-1</Card.Title>
                                </Card.Body> */}
                            </Card>
                        </Col>
                        <Col>
                            <Card className="px-2">
                                <img
                                    variant="top"
                                    src={event.fourthImage}
                                    className="mx-auto my-2 achievement-img"
                                    alt="img not found"
                                    width="88%"
                                    height="88%"
                                />
                                {/*  <Card.Body>
                                    <Card.Title>Achievement-1</Card.Title>
                                </Card.Body> */}
                            </Card>
                        </Col>
                     
                       
                            
                    
       
                    </Row>
                    
                </div>)
            }
        </div>
    );
};

export default Achievement;
