import React, { useState } from "react";
import "./App.css";
import Child from "./Child";
import GeneralInfo from "./GeneralInfo";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0)

  console.log('render parent')

  const handleSecondCounter = (counter) => {
    console.log(counter);
    setSecondCounter(prev => prev + 1);
  }

  const handleFirstCounter = () => {
    setCounter(prev => prev + 1)
  }

  return (
    <>
      <Child counter={counter} handleClick={handleFirstCounter} />
      <Child counter={secondCounter} handleClick={handleSecondCounter}/>

      <GeneralInfo firstCounter={counter}  secondCounter={secondCounter}/>
    </>
  );
};

export default App;
