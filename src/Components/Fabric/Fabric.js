import React from 'react';
import { Accordion } from 'react-bootstrap';
import CheckBox from '../CheckBox/CheckBox';
import './Fabric.scss';
const fabricData = [
    { label: 'Cotton Blend' },
    { label: 'Cotton Linen Blend' },
    { label: 'Cotton Silk' },
    { label: 'Linen Blend' },
    { label: 'Nylon Blend' },
    { label: 'Poly Silk' },
    { label: 'PolyCotton' },
    { label: 'Pure Cotton' },
    { label: 'Rayon' },
    { label: 'Cotton Blend' },
    { label: 'Cotton Blend' },
    { label: 'Cotton Blend' },
]
const Fabric = () => {
    return (
        <>
            <Accordion style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                <Accordion.Item style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                    <Accordion.Header>Fabric</Accordion.Header>
                    <Accordion.Body>
                        <div className="fabricBox">
                        {
                            fabricData.map(data => {
                                return (
                                    <CheckBox props={data} />
                                )
                            })
                        }
                        </div>
                        <h6 className="my-2" style={{color: 'rgb(1,199,101)',}}>6 More</h6>


                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </>
    );
};

export default Fabric;