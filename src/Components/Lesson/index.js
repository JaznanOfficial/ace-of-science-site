import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import "./lesson.css";

import DefultVideo from "./mov_bbb.mp4";

export default function Lesson() {
    const { search } = useLocation();
    const { subjects } = useParams();
    console.log(subjects);
    const urlQueryObj = new URLSearchParams(search);
    var Qvalue = {
        type: urlQueryObj.get("type"),
        class: urlQueryObj.get("class"),
        subjectCode: urlQueryObj.get("subjectCode"),
        v: urlQueryObj.get("v") || 0,
    };
    console.log(Qvalue.type);
    const [lessonVideos, setLessoVideos] = useState([]);

    useEffect(() => {
        fetch(`https://aosserver.herokuapp.com/api/lesson/video/${Qvalue.subjectCode}`)
            .then((res) => res.json())
            .then((data) => setLessoVideos(data));
    }, []);
    console.log(lessonVideos);

    return (
        <section className="lesson-div container-fluid mx-2 my-5">
            {/* {Qvalue.class + Qvalue.type + Qvalue.subject + Qvalue.v} */}

            {lessonVideos.map((lessonVideo,key) => (
                <Row key={key}>
                    <Col md={8}>
                        <div>
                            <iframe
                                width="560"
                                height="315"
                                src={lessonVideo.embedHref}
                                title={lessonVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen = {true}
                            ></iframe>
                        </div>
                        <div>
                            <h3>{lessonVideo.title}</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                                laborum dicta incidunt temporibus quia enim debitis architecto omnis
                                veritatis fuga nisi quo a facere fugit perferendis, alias,
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
                            Class: {Qvalue.class} | Subject: {Qvalue.name}
                        </h6>
                        <div className="list-group list-group-flush ">
                            {lessonVideos.map((lesson, key) => (
                                <Link
                                    key={key}
                                    className="list-group-item text-start"
                                    to={
                                        "/lesson?type=" +
                                        Qvalue.type +
                                        "&className=" +
                                        Qvalue.class +
                                        "&subjectCode=" +
                                        Qvalue.subjectCode +
                                        "&v=" +
                                        key
                                    }
                                >
                                    {lesson}
                                </Link>
                            ))}
                            {
                                //     <Link
                                //     to="#"
                                //     className="list-group-item text-start disabled"
                                //     aria-disabled="true"
                                // >
                                //     Quiz
                                // </Link>
                                // <Link
                                //     to="#"
                                //     className="list-group-item text-start disabled"
                                //     aria-disabled="true"
                                // >
                                //     Exam
                                // </Link>
                            }
                        </div>
                        <Link to={"/academicclass/" + Qvalue.classnumber} className="btn btn-success m-2">
                            Change Subject
                        </Link>
                    </Col>
                </Row>
            ))}
        </section>
    );
}
