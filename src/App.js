// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App() {

  return (
    <div className="App">
    
      <Counter></Counter>
    
    </div>
  );
  
}

function Counter(){
  const [count , setCount] = useState(33);
  return(
    <div>
      <h2>Counter: {count}</h2>
      <button>Increment</button>
    </div>
  )
}


export default App;
