import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SlideBar from '../SlideBar/SlideBar';

const Blog = () => {
    return (
        <Col  className=" container mx-auto">
            <Row className="">
                <h1 className="text-center w-100">LATEST BLOGS</h1>
                <h5 className="text-center w-100 mx-auto my-3">This is a place devoted to giving you deeper insight into the news, trends, people and technology behind Bing.</h5>
            </Row>
            <Row>
                <SlideBar></SlideBar>
            </Row>
        </Col>
    );
};

export default Blog;