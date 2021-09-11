import React, { useState } from 'react';
import { Breadcrumb, Nav } from 'react-bootstrap';
import './Header.scss'
import ProductNav from '../ProductNav/ProductNav';
import { Divider } from '@material-ui/core';

const Header = () => {
    // const [color, setColor]= useState('gray');
    return (
        <div>
            <Nav
                activeKey="/allProducts"
                onSelect={(selectedKey) =>{
                    // setColor('black')
                    alert(`selected ${selectedKey}`)}}
            >
                <Nav.Item>
                    <Nav.Link style={{color:'rgb(180,180,180)',fontWeight:'500'}}  href="/home">Homepage</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{color:'black',fontWeight:'500'}} href="/allProducts" eventKey="link-1">All Products</Nav.Link>
                </Nav.Item>
            </Nav>
            <hr />
            {/* <Divider variant="fullWidth" flexIte style={{height:'2px'}}  /> */}
            <ProductNav></ProductNav>
        </div>
    );
};

export default Header;