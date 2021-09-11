import React from 'react';
import { Accordion, Nav } from 'react-bootstrap';
import './Category.scss';
const Category = () => {
  return (
    <>
      <Accordion style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
        <Accordion.Item style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
          <Accordion.Header>Category</Accordion.Header>
          <Accordion.Body>

            <p>Mens Clothing</p>
            <ul>
              <p style={{fontWeight: 'bold'}}>Casual Wear</p>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link className="text-secondary" href="#">Shirts</Nav.Link>
            </Nav>
            </ul>

          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
      
    </>
  );
};

export default Category;