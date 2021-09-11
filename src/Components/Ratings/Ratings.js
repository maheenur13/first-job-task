import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Box, Typography } from '@material-ui/core';
import { Accordion, Form } from 'react-bootstrap';
import './Rating.scss';

const ratingData = [
    { max: 5, value: 5, id: '1', label: '1' },
    { max: 4, value: 4, id: '2', label: '2' },
    { max: 3, value: 3, id: '3', label: '3' },
    { max: 2, value: 2, id: '4', label: '4' },
    { max: 1, value: 1, id: '5', label: '5' },
]

const Ratings = () => {
    return (
        <div>


            <>
                <Accordion style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                    <Accordion.Item style={{ border: 'none', backgroundColor: 'white', boxShadow: 'none' }}>
                        <Accordion.Header>Category</Accordion.Header>
                        <Accordion.Body>

                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <div className="d-flex flex-column mt-3">
                                    {
                                        ratingData.map((data) => {
                                            return (
                                                <div className="d-flex align-items-center mt-1">
                                                    <Form>
                                                        <Form.Check
                                                            inline
                                                            name="group1"
                                                            type="radio"
                                                            
                                                        // onChange={handleItemsCheck}
                                                        />

                                                    </Form>
                                                    <Rating
                                                        name="customized-empty"
                                                        value={data.value}
                                                        max={data.max}

                                                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                                    />

                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </Box>

                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

            </>




        </div>
    );
};

export default Ratings;