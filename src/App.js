// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Device from './component/Device/Device';


function App() {

  return (
    <div className="App">
    
      {/* <Counter></Counter> */}
      <Device name="uphone" price="12000" ></Device>
      <Device name="symsung"></Device>
    
    </div>
  );
  
}

// function Counter(){
//   const [count , setCount] = useState(33);
//   const increseCount = () =>{
//     const newCount = count + 1;
//     setCount(newCount);
//   }
//   return(
//     <div>
//       <h2>Counter: {count}</h2>
//       <button onClick={increseCount}>Increase</button>
//     </div>
//   )
// }


export default App;
