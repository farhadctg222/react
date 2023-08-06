import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react-dom/client';



function App() {
  const nayoks = ['rajjak','rahim','rohim','rafi']
    
  return (
    <div className="App">
      {
        nayoks.map((nayok)=> <Myfunction name={nayok}></Myfunction>)
      }
      
      <h2>hello world</h2>
      <Myfunction></Myfunction>
     
      
      
      
      <header className="App-header">
     
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <farhad></farhad>
          Learn React
        </a>
      </header>
    </div>
  );
}

function Myfunction(){

  const [count,setcount] = useState(10)
  console.log(setcount)
  const handle = ()=> setcount(count+1)
  return (
    <div>
      <button onClick={handle}>add</button>
      <h1>add movie {count}</h1>
      <Movies name={count +10}></Movies>

      <Movies name={count +30}></Movies>
      <Movies name={count +2}></Movies>
      <Movies name={count +9}></Movies>
    </div>
  )
}
function Movies(props){
  return <h1>hello world {props.name} </h1>

}

export default App;
