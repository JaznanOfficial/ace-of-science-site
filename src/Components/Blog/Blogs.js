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
            {
                // <div className="my-5 h-100">
            //     <h1 className="text-danger">Featured Blog</h1>

            //     <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            //         <Row xs={1} md={2} className="g-4">
            //             {Array.from({ length: 4 }).map((_, idx) => (
            //                 <SwiperSlide>
            //                     <Card className="d-lg-flex flex-lg-row justify-content-center align-items-center p-3 text-start ">
            //                         <div>
            //                             <img
            //                                 src="https://thumbs.dreamstime.com/b/freedom-concept-silhouettes-broken-chain-birds-flying-sky-180470108.jpg"
            //                                 className="swiper-image rounded"
            //                                 alt="img not found"
            //                             />
            //                         </div>
            //                         <div>
            //                             <Card.Body>
            //                                 <Card.Title>Card title</Card.Title>
            //                                 <Card.Text>
            //                                     This is a longer card with supporting text below as
            //                                     a natural lead-in to additional content. This
            //                                     content is a little bit longer.
            //                                 </Card.Text>
            //                             </Card.Body>
            //                         </div>
            //                         <strong className="mb-3 text-center">
            //                             <a href="#" className="see-more">
            //                                 See More <i className="fas fa-arrow-circle-right"></i>{" "}
            //                             </a>
            //                         </strong>
            //                     </Card>
            //                 </SwiperSlide>
            //             ))}
            //         </Row>
            //     </Swiper>
            // </div>
        }

            <h1 className="text-danger">Blogs</h1>

            {blogs.length === 0 && (
                <h1 className="my-5 py-5">
                  <HashLoader color={'#FE1A00'} loading={true} size={150} />
                </h1>
              )}
                <Row xs={1} md={3} className="g-4">
                {
                    
                    reverseBlogs.map(blog => <Col>
                            <Card className="shadow">
                                <Card.Img
                                    variant="top"
                                    src={blog.imageLink}
                                    className="m-3"
                                />
                                <Card.Body>
                                    <h3 className="text-danger">{blog.heading}</h3>
                                    <Card.Text>
                                        {blog.text.slice(0, 200)}...
                                    </Card.Text>
                                </Card.Body>
                                <strong className="mb-3">
                                    <Link to={`/single-blog/${blog._id}`} className="see-more">
                                        See More <i className="fas fa-arrow-circle-right"></i>{" "}
                                    </Link>
                                </strong>
                            </Card>
                        </Col>)
                    }
                    
            </Row>
            
        </div>
    );
};

export default Blogs;
