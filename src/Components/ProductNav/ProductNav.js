import React from 'react';
import { Icon } from 'react-icons-kit';
import {iosSearch} from 'react-icons-kit/ionicons/iosSearch';
import './ProductNav.scss'
import { Button, ButtonGroup, Col, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
const ProductNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" >
            <Navbar.Text style={{ marginRight: '43px' }}>Showing 1 - 40 of 80,068 products</Navbar.Text>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Text style={{ marginRight: '23px',color:'black', fontWeight: '500' }}>Refine By</Navbar.Text>
                <Nav className="me-auto">
                    <NavDropdown style={{ marginRight: '43px' }} title="Price" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Text style={{ marginRight: '23px',color:'black', fontWeight: '500' }}>Sort By</Navbar.Text>
                    <NavDropdown style={{ marginRight: '43px' }} title="Best Sellers" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                    </NavDropdown>

                </Nav>

                <Form className="d-flex justify-content-center align-items-center  w-25 border rounded">
                    <FormControl

                        type="search"
                        placeholder="Search"
                        className="mr-2 border-0"
                        aria-label="Search"
                        
                        
                    />
                    <Icon className="p-2" size={21}  icon={iosSearch}/>
                    
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default ProductNav;