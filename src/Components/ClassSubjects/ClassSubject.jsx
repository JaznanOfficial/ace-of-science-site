import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import book from '../AcademicClass/book-icon.png';

import ScrollToTop from 'react-scroll-to-top';

import { subjectOfClass } from '../../dummydata';
import './classsubject.css';
import { HashLoader } from 'react-spinners';

export default function ClassSubjects() {
  let [color, setColor] = useState('#FE1A00');
  const { classnumber } = useParams();
  // const subjects = subjectOfClass[classnumber];


  const [subjects, setSubjects] = useState([]);

  // {
  //   subjects.length === 0 && (
  //     <h1 className="my-5 py-5">
  //       <HashLoader color={color} loading={true} size={150} />
  //     </h1>
  //   );
  // }
  useEffect(() => {
    fetch(`https://aosserver.herokuapp.com/api/lesson/subjects/${classnumber}`)
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  //rendering view variable

  return (
    <section className="container my-5">
      <ScrollToTop smooth color="#FE1A00" viewBox="0 0 250 250" />
      {subjects.length === 0 && (
        <h1 className="my-5 py-5">
          <HashLoader color={color} loading={true} size={150} />
        </h1>
      )}
      <Row xs={1} md={3} className="g-4 my-1">
        {subjects?.map((subj, key) => (
          <Col key={key}>
            <Link
              to={
                '/lesson?type=ac&className=' +
                classnumber +
                '&subjectCode=' +
                subj.subjectCode
              }
            >
              <Card className="card-1 rounded-3 border border-light d-flex flex-row justify-content-center align-items-center px-2 shadow my-0">
                <div className="image-div-1 d-flex justify-content-center align-items-center">
                  <img src={book} alt="" width={48} />
                </div>
                <Card.Body>
                  <Card.Title>
                    <h2>{subj.name}</h2>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
}
