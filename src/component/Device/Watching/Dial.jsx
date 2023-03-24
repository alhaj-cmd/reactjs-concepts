import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid red', margin:'2px'}}>
            <h2>This is Dial</h2>
            <p>Dial{props.steps}</p>
        </div>
    );
};

export default Dial;