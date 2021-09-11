import React from 'react';
import { Accordion } from 'react-bootstrap';

const MensTrend = () => {
    return (
        <>
            <Accordion style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                <Accordion.Item eventKey="0" style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                    <Accordion.Header>Men's Style</Accordion.Header>
                    <Accordion.Body>
                       <h3>Men's Style Will be Implemented Here</h3>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
            </>
    );
};

export default MensTrend;