import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./lesson.css";

import DefultVideo from "./mov_bbb.mp4";

export default function Lesson() {
  const { search } = useLocation();
  const urlQueryObj = new URLSearchParams(search);
  var Qvalue = {
    type: urlQueryObj.get("type"),
    class: urlQueryObj.get("class"),
    subject: urlQueryObj.get("subject"),
    v: urlQueryObj.get("v") || 0,
  };
  const lessonVideos = [
    "lesson 1",
    "lesson 2",
    "lesson 3",
    "lesson 4",
    "lesson 5",
    "lesson 6",
    "lesson 7",
    "lesson 8",
    "lesson 9",
  ];
  return (
    <section className="lesson-div container-fluid mx-2">
      {/* {Qvalue.class + Qvalue.type + Qvalue.subject + Qvalue.v} */}

      <Row>
        <Col md={8}>
          <div>
            <video
              src={DefultVideo}
              controls
              className="w-100 video_player"
            ></video>
          </div>
          <div>
            <h3>the class description title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              laborum dicta incidunt temporibus quia enim debitis architecto
              omnis veritatis fuga nisi quo a facere fugit perferendis, alias,
              voluptatem voluptates sapiente! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam laborum dicta incidunt
              temporibus quia enim debitis architecto omnis veritatis fuga nisi
              quo a facere fugit perferendis, alias, voluptatem voluptates
              sapiente!{" "}
            </p>
          </div>
        </Col>
        <Col md={4}>
          <h6 className="py-1 my-2 border-bottom ">
            Class: {Qvalue.class} | Subject: {Qvalue.subject}
          </h6>
          <div className="list-group list-group-flush ">
            {lessonVideos.map((lesson, key) => (
              <Link
                key={key}
                className="list-group-item text-start"
                to={
                  "/lesson?type=" +
                  Qvalue.type +
                  "&class=" +
                  Qvalue.class +
                  "&subject=" +
                  Qvalue.subject +
                  "&v=" +
                  (key + 1)
                }
              >
                {lesson}
              </Link>
            ))}
            <Link
              to="#"
              className="list-group-item text-start disabled"
              aria-disabled="true"
            >
              Quiz
            </Link>
            <Link
              to="#"
              className="list-group-item text-start disabled"
              aria-disabled="true"
            >
              Exam
            </Link>
          </div>
          <Link
            to={"/academicclass/" + Qvalue.class}
            className="btn btn-success m-2"
          >
            Change Subject
          </Link>
        </Col>
      </Row>
    </section>
  );
}
