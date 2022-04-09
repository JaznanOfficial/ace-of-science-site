import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleBlog.css";

const SingleBlog = () => {
    

    const  {id}  = useParams();


    const [singleData, setSingleData] = useState([])
    
    useEffect(() => {
        fetch(`https://enigmatic-crag-58614.herokuapp.com/single-blog/${id}`)
            .then(res => res.json())
        .then(data => setSingleData(data))
    }, [])
   

 


    const {imageLink, heading, text} = singleData ||{}


    return (
        <div className="single-blog px-3 mx-auto">
            <div className="image-div mb-5 p-0">
                <img
                    src={imageLink}
                    alt=""
                />
            </div>
            <div>
                <h1 className="text-danger">{heading}</h1>
                <p className="text-start fs-5 fw-700">
                   {text}
                </p>
            </div>
        </div>
    );
};

export default SingleBlog;
