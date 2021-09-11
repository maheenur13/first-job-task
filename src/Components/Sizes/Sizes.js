import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
import DividerDashed from '../DividerDashed/DividerDashed';
const sizeArray = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const colors = ['#282C34', '#1b50ba', '#0ed6c8', '#ea1e54', '#000000']
const Sizes = () => {
    return (
        <div>
            <Accordion style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }} >
                <Accordion.Item style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                    <Accordion.Header>Size</Accordion.Header>
                    <Accordion.Body>

                        <div className="d-flex justify-content-around align-items-center  py-3">
                            {
                                sizeArray.map(s => {
                                    return (
                                        <h6 className="border p-2">{s}</h6>
                                    )
                                })
                            }


                        </div>
                        <DividerDashed />
                        <div className="px-2 py-3">

                            <Form.Label>Color</Form.Label>
                            <div className="d-flex justify-content-around align-items-center pt-3">
                                {colors.map(color => {
                                    return (
                                        <Form.Control
                                            className="rounded-0"
                                            type="color"
                                            id="exampleColorInput"
                                            value={color}
                                            title="Choose your color"
                                        />
                                    )
                                })}
                            </div>

                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion >
        </div>
    );
};

export default Sizes;