import React, { useEffect, useState } from 'react';
import book from './book-icon.png';
import { HashLoader } from 'react-spinners';

import ScrollToTop from 'react-scroll-to-top';

import { Link } from 'react-router-dom';
import './AcdmClass.css';

import { api } from '../../dummydata';
import { Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

export default function AcdmClass() {
  let [color, setColor] = useState("#FE1A00");
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get(`${api}lesson/classes`)
      .then((res) => {
        setClasses(res.data.academic);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <section className="academic-class my-5">
      <ScrollToTop smooth color="#FE1A00" viewBox="0 0 250 250" />
      <Container>
        <h1>Academic Classes</h1>
        {classes.length === 0 && (
          <h1 className='my-5 py-5'><HashLoader color={color} loading={true} size={150} /></h1>
        )}
        <Row xs={1} md={3} className="g-4 my-3">
          {classes.map((classvalue, key) => (
            <Col className="my-0" key={key}>
              <Link to={'/academicclass/' + classvalue.classCode}>
                <Card className="card-1 rounded-3 border border-light d-flex flex-row justify-content-center align-items-center px-2 shadow">
                  <div className="image-div-1 d-flex justify-content-center align-items-center">
                    <img src={book} alt="" width={48} />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <h2>{classvalue.name}</h2>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
