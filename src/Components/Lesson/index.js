import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';

import './lesson.css';

export default function Lesson() {
  const { search } = useLocation();
  const urlQueryObj = new URLSearchParams(search);
  var Qvalue = {
    type: urlQueryObj.get('type'),
    class: urlQueryObj.get('className'),
    subjectCode: urlQueryObj.get('subjectCode'),
    v: urlQueryObj.get('v') || 0,
  };

  const [lessonVideos, setLessoVideos] = useState([]);
  const [lesson, setLesson] = useState();

  useEffect(() => {
    setLesson(lessonVideos[Qvalue.v]);
  }, [Qvalue.v]);

  useEffect(() => {
    fetch(
      `https://aosserver.herokuapp.com/api/lesson/video/${Qvalue.subjectCode}`
    )
      .then((res) => res.json())
      .then((data) => {
        setLesson(data[Qvalue.v]);

        setLessoVideos(data);
      });
  }, [Qvalue.subjectCode]);

  return (
    <section className="lesson-div container-fluid mx-2 my-5">
      {/* {Qvalue.class + Qvalue.type + Qvalue.subject + Qvalue.v} */}
      {!lesson ? (
        <h1 className="my-5 py-5">
          <HashLoader color={'#FE1A00'} loading={true} size={150} />
        </h1>
      ) : (
        <Row>
          <Col md={8}>
            <>
              <div className="video_player">
                <iframe
                  src={lesson.embedHref}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div>
                <h3>{lesson.title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam laborum dicta incidunt temporibus quia enim debitis
                  architecto omnis veritatis fuga nisi quo a facere fugit
                  perferendis, alias, voluptatem voluptates sapiente! Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                  laborum dicta incidunt temporibus quia enim debitis architecto
                  omnis veritatis fuga nisi quo a facere fugit perferendis,
                  alias, voluptatem voluptates sapiente!{' '}
                </p>
              </div>
            </>
          </Col>
          <Col md={4}>
            <div className="list-group list-group-flush ">
              {lessonVideos.map((l, key) => (
                <Link
                  key={key}
                  className="list-group-item text-start"
                  to={`/lesson?type=${Qvalue.type}&className=${Qvalue.class}&subjectCode=${Qvalue.subjectCode}&v=${key}`}
                >
                  {l.title}
                </Link>
              ))}
            </div>
            <Link
              to={'/academicclass/' + Qvalue.class}
              className="btn btn-success m-2"
            >
              Change Subject
            </Link>
          </Col>
        </Row>
      )}
    </section>
  );
}
