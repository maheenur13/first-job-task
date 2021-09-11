import React from 'react';
import { Accordion } from 'react-bootstrap';
import CheckBox from '../CheckBox/CheckBox';
import './Countries.scss';

const options = [
    { label: 'USA' },
    { label: 'Germany' },
    { label: 'Italy'},
    { label: 'UK' },
    { label: 'Bangladesh' },
    { label: 'India' },
    { label: 'Russia' },
]
const Countries = () => {
    return (
        <Accordion style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
        <Accordion.Item style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
            <Accordion.Header>Country</Accordion.Header>
            <Accordion.Body>
                  <div className="countryBox px-3 py-2">
                        {options.map(option => {
                            
                            return (
                               <CheckBox props={option}/>
                            )
                        })}
                        
                    </div>
                    <h6 className="mt-3" style={{color: 'rgb(1,199,101)',}}>2 More</h6>
                




            </Accordion.Body>
        </Accordion.Item>
    </Accordion >

    );
};

export default Countries;