import React from 'react';
import { Icon } from 'react-icons-kit'
import { Accordion } from 'react-bootstrap';
import CheckBox from '../CheckBox/CheckBox';
import DividerDashed from '../DividerDashed/DividerDashed';
import {iosArrowRight} from 'react-icons-kit/ionicons/iosArrowRight';
import './DiscountAndPrice.scss';
const discount = [
    { label: '10% - 30%' },
    { label: '30% - 50%' },
    { label: '50% - 70%' },
]
const DiscountAndPrice = () => {
    return (
        <>
            <Accordion style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }} >
                <Accordion.Item style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                    <Accordion.Header>Discount</Accordion.Header>
                    <Accordion.Body>

                        <div className="">
                            {discount.map(disc => {
                                return (
                                    <CheckBox props={disc} />
                                )
                            })}
                        </div>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item style={{ border: 'none'}}>
                            <Accordion.Body>
                            <DividerDashed  />
                            </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item style={{border:'none'}}>
                
                    <Accordion.Body >
                        <h5>Price</h5>
                            <div className="d-flex align-items-center my-3">
                                <div className="d-flex border rounded-4 w-25 p-2">
                                    <label style={{marginRight:'5px'}}>Min</label>
                                    <input className="w-100 border-0 priceInput" type="number" />
                                </div>
                                <p className="m-2">-</p>
                                <div className="d-flex border rounded-2 w-25 p-2">
                                <label style={{marginRight:'5px'}}>Max</label>
                                    <input className="w-100 border-0 priceInput" type="number" />
                                </div>
                                <button className="customBtn"><Icon size={21}  icon={iosArrowRight}/></button>
                            </div>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </>
    );
};

export default DiscountAndPrice;