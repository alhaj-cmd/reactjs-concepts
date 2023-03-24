import React, { useState } from 'react';
import Dial from './Dial';





const Watch = () => {
    const [steps, setSteps] = useState(0);
    const  IncriseSteps = () =>{
    // console.log('watch');
    const nesSteps = steps +1;
    setSteps(nesSteps)
    }

    return (
        <div>
            <h3>This is my smart Watch!</h3>
            <p>Steps: {steps}</p>
            <button onClick={IncriseSteps}>De Dour</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;