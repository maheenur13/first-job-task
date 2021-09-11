import React from 'react';
import { Accordion, Nav } from 'react-bootstrap';

const SideBarAccordion = () => {
    return (
        <div>
            <Accordion style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }} className="m-3">
                <Accordion.Item style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                    <Accordion.Header>Category</Accordion.Header>
                    <Accordion.Body>

                        <p>Mens Clothing</p>
                        <ul>
                            <p style={{ fontWeight: 'bold' }}>Casual Wear</p>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link className="text-secondary" href="#">Shirts</Nav.Link>
                            </Nav>
                        </ul>

                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
};

export default SideBarAccordion;