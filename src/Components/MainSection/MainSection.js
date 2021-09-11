import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Products from '../Products/Products';
import SideBar from '../SideBar/SideBar';

const MainSection = () => {
    return (
        <Row className="py-5">
            <Col md={4} lg={3}>
            <SideBar></SideBar>
            </Col>
            <Col md={8} lg={9}>
            <Products></Products>
            </Col>
        </Row>
    );
};

export default MainSection;