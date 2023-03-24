import React from 'react';
import Watch from './Watching/Watch';

const Devicedetails = (props) => {
    return (
        <div>
            <p>Price:{props.price}</p>
            <Watch></Watch>
        </div>
    );
};

export default Devicedetails;