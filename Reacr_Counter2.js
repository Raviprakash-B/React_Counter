import { useState } from 'react';
import './App.css';

/*const Person = (props) =>{
  return (
    <>
    <h1>Name:{props.name}</h1>
    <h2>LastName:{props.lastName}</h2>
    <h3>age:{props.age}</h3>
    </>
  )
}*/


const App = () => {
  const [Counter,setCounter] = useState(0); //Setting State to 0
 

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
      <h1>{Counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>
    </div>
  );
}

export default App;
