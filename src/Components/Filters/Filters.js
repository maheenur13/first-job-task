import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const Filters = () => {
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    return (
        <div className="px-3 py-3">
            <div>
                <h5 className="m-2 pb-2">Filters</h5>
                <Chip
                    style={{
                        border: '1px solid #9C9B99',
                        color: '#9C9B99',
                        backgroundColor: '#FAFAFA'
                    }}
                    className="m-1 py-2"
                    label="Out of Stock"
                    onClick={handleClick}
                    onDelete={handleDelete}
                />
            </div>
            <div>
                <Chip
                    style={{
                        border: '1px solid #9C9B99',
                        color: '#9C9B99',
                        backgroundColor: '#FAFAFA'
                    }}
                    className="m-1 py-2"
                    label="Size : XL"
                    onClick={handleClick}
                    onDelete={handleDelete}
                />
            </div>
            {/* #9C9B99 */}
            <div>
                <Chip
                    style={{
                        border: '1px solid rgb(1,199,101)',
                        color: 'rgb(1,199,101)',
                        backgroundColor: '#E7FFF2'
                    }}
                    className="m-1 py-2"
                    label="Clear" />
            </div>

        </div>
    );
};

export default Filters;