import React from 'react';
import { Accordion } from 'react-bootstrap';
import CheckBox from '../CheckBox/CheckBox';
import './Pattern.scss'
const patternData =[
    {label:'Chekered'},
    {label:'Chevron/Zig Zag'},
    {label:'Color Black'},
    {label:'Floral Print'},
    {label:'Houndstooth'},
    {label:'Polka Print'},
    {label:'Printed'},
    {label:'Self Design'},
    {label:'Solid'},
    {label:'Chekered'},
    {label:'Houndstooth'},
    {label:'Printed'},
]
const Pattern = () => {
    return (
        <>
            <Accordion style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                <Accordion.Item style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                    <Accordion.Header>Pattern</Accordion.Header>
                    <Accordion.Body>
                        <div className="patternBox">
                        {
                            patternData.map(data => {
                                return (
                                    <CheckBox props={data} />
                                )
                            })
                        }
                        </div>
                        <h6 className="my-2" style={{color: 'rgb(1,199,101)',}}>26 More</h6>


                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </>
    );
};

export default Pattern;