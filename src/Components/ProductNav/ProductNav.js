import React from 'react';
import './ProductNav.scss'
import { Button, ButtonGroup, Col, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
const ProductNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Navbar.Text style={{ marginRight: '43px' }}>Showing 1 - 40 of 80,068 products</Navbar.Text>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Text style={{ marginRight: '23px', fontWeight: 'bold' }}>Refine By</Navbar.Text>
                <Nav className="me-auto">
                    <NavDropdown style={{ marginRight: '43px' }} title="Price" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Text style={{ marginRight: '23px', fontWeight: 'bold' }}>Sort By</Navbar.Text>
                    <NavDropdown style={{ marginRight: '43px' }} title="Best Sellers" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>

                </Nav>

                <Form className="d-flex  w-25">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2 "
                        aria-label="Search"
                        
                    />
                    
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default ProductNav;