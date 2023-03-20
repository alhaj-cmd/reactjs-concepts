// import logo from './logo.svg';
import './App.css';


function App() {
  const names =['ali', 'rahmot', 'sujon', 'ashiq'];
  const products =[
    {name:'sakil', roll:10, pro:'student'},
    {name:'rahmot', roll:1, pro:'student'},
    {name:'ashiq', roll:2, pro:'student'},
  ]
  return (
    <div className="App">
      {
      names.map(name => <li>{name}</li>)
      }
      {
      products.map(product => <Persone name={product.name} roll={product.roll}></Persone>)
      }
     
     <Friends nam="Ashiq" pross="student"></Friends>
     <Friends pross="student" nam="Ashiq"></Friends>
    </div>
  );
  
}
function Persone(props) {
  console.log(props)
 return (
  <div className="container">
   <h2>My name is  {props.name}</h2>
      <p>My profetion {props.roll}</p>
  </div>
 )
}

function Friends(props){
  console.log(props)
  return(
    <div className="contaner">
      <h2>My name is  {props.nam}</h2>
      <p>My profetion {props.pross}</p>
    </div>
  )
}

export default App;
