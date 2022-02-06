import React from "react";
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
    <section className="container-fluid mx-2">
      {/* {Qvalue.class + Qvalue.type + Qvalue.subject + Qvalue.v} */}

      <div className="row">
        <div className="col-md-8 col-12 ">
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
        </div>
        <div className="col-md-4 col-12 ">
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
        </div>
      </div>
    </section>
  );
}
