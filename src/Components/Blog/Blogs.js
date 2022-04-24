import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./Blog.css";
import ScrollToTop from "react-scroll-to-top";
import { HashLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Blogs = () => {


    const [blogs, setBlogs] = useState([])
    
    useEffect(() => {
        fetch('https://warm-citadel-00877.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
               
            })
    },[])
    const reverseBlogs = [...blogs].reverse()
    
    


    return (
        <div className="container my-5">
        <ScrollToTop smooth color="#FE1A00" viewBox="0 0 250 250" />
            

            <h1 className="text-danger">Blogs</h1>

            {blogs.length === 0 && (
                <h1 className="my-5 py-5">
                  <HashLoader color={'#FE1A00'} loading={true} size={150} />
                </h1>
              )}
                <Row xs={1} md={3} className="g-4">
                {
                    
                    reverseBlogs.map(blog => {
                        const content = blog.content
                        console.log(content);
                        return <Col>
                        <Card className="shadow blog-card">
                                
                            <Card.Body dangerouslySetInnerHTML={{
                                __html: content
                            }} className='overflow-hidden pb-3'>
                                    
                            </Card.Body>
                                <Card.Footer>
                                <strong className="mb-3">
                                <Link to={`/single-blog/${blog._id}`} className="see-more">
                                    See More <i className="fas fa-arrow-circle-right"></i>{" "}
                                </Link>
                            </strong>
                                </Card.Footer>
                        </Card>
                    </Col>
                    })
                    }
                    
            </Row>
            
        </div>
    );
};

export default Blogs;
