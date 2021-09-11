import React from 'react';
import { Accordion } from 'react-bootstrap';

const ClothingStyle = () => {
    return (
        <>
            <Accordion style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                <Accordion.Item eventKey="0" style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                    <Accordion.Header>Clothing Style</Accordion.Header>
                    <Accordion.Body>
                       <h3>Clothing Style Will be Implemented Here</h3>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            </>
    );
};

export default ClothingStyle;