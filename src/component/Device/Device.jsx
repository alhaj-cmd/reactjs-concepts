import React from 'react';
import Devicedetails from './Devicedetails';

const Device = (props) => {
    return (
        <div>
            <h3>Hello i am jsx Device {props.name}</h3>
            <p>Price: {props.price}</p>
            <h3>hello Price</h3>
            <Devicedetails price={props.price}></Devicedetails>
        </div>
    );
};

export default Device;