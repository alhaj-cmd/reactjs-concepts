// import logo from './logo.svg';
import './App.css';


function App() {
  const names =['ali', 'rahmot', 'sujon', 'ashiq'];
  return (
    <div className="App">
      {
      names.map(name => <li>{name}</li>)
      }
     <Persone name="Rahmot"></Persone>
     <Friends nam="Ashiq" pross="student"></Friends>
     <Friends pross="student" nam="Ashiq"></Friends>
    </div>
  );
  
}
function Persone(props) {
  console.log(props)
 return <h2>Md Alhaj Sarkar & {props.name}</h2>
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
