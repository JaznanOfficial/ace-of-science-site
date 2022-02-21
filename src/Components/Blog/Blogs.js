import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Blog.css';

const Blogs = () => {
    return (
        <div className='container my-5'>
        <h1 className='text-danger'>Blogs</h1>
        <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/freedom-concept-silhouettes-broken-chain-birds-flying-sky-180470108.jpg" className='m-3' />
              <Card.Body>
                <h3>Card title</h3>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
                    </Card.Body>
                    <strong className='mb-3'>See More <i class="fas fa-arrow-circle-right"></i> </strong>
            </Card>
          </Col>
        ))}
      </Row>
        </div>
    );
};

export default Blogs;