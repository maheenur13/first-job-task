import React from 'react';
import { Form } from 'react-bootstrap';
import './CheckBox.scss'
const CheckBox = ({props}) => {
    console.log(props)
    return (
        <Form className="my-1">
        <Form.Check 
        value={props.value}
        name={props.label}
        type="checkbox"
        label={props.label}
        // onChange={handleItemsCheck}
        />
    </Form>
    );
};

export default CheckBox;