import React from 'react';
import { Accordion } from 'react-bootstrap';

const FitType = () => {
    return (
        <>
        <Accordion style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }} className="my-3">
            <Accordion.Item style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                <Accordion.Header>Fit Type</Accordion.Header>
                <Accordion.Body>
                   <h3>Fit Type Will be Implemented Here</h3>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
        </>
    );
};

export default FitType;