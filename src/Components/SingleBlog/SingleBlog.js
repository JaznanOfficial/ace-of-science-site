import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleBlog.css";

const SingleBlog = () => {
    const { id } = useParams();

    const [singleData, setSingleData] = useState([]);

    useEffect(() => {
        fetch(`https://aos-server.onrender.com/single-blog/${id}`)
            .then((res) => res.json())
            .then((data) => setSingleData(data));
    }, []);

    const { content } = singleData || {};

    return (
        <div
            className="single-blog container border border-rounded my-3"
            dangerouslySetInnerHTML={{
                __html: content,
            }}
        ></div>
    );
};

export default SingleBlog;
