import React from 'react';
import { Accordion } from 'react-bootstrap';
import CheckBox from '../CheckBox/CheckBox';
import './Services.scss'
const serviceData = [
    { label: 'Cash On Delivery' },
    { label: 'Free Shipping' },
]
const Services = () => {
    return (
        <>
            <Accordion style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                <Accordion.Item style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                    <Accordion.Header>Service</Accordion.Header>
                    <Accordion.Body>
                        <div style={{ overflowY: serviceData.length > 2 ? 'scroll' : 'none', }} className="servicesBox">
                            {
                                serviceData.map(data => {
                                    return (
                                        <CheckBox props={data} />
                                    )
                                })
                            }
                        </div>
                        {/* <h6 className="my-2" style={{color: 'rgb(1,199,101)',}}>26 More</h6> */}


                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </>
    );
};

export default Services;