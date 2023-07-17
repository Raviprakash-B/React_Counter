import React,{useState} from "react";

const App = () =>{
const [count,setCount] = useState(0);

function decrement(){
  //setCount = (prevCount => prevCount - 1);
  setCount(count - 1)
}

function increment(){
  //setCount = (prevCount => prevCount +1);
  setCount(count + 1)
}
return(
  <>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
  </>
)
}
export default App;
