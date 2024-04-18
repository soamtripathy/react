import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] =   useState(0)

  // 


  //let counter = 15;

  const addValue = () => {
    if (counter < 20){
      counter = counter + 1 
    }
    else{
      alert("Don't add value")
    }
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    //setCounter(counter)
    
    // It will not print the value 4 rather it will update by 1
    // Because due to fibre, useState send programs in batch

  };
  const removeValue = () => {
    if (counter > 1){
      counter = counter -1 
    }
    else{
      alert("Don't remove value")
    }
    setCounter(counter)

  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
