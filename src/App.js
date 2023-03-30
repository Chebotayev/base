import React, { useState } from "react";
import "./App.css";
import Child from "./Child";
import Effects from "./Effects";
import GeneralInfo from "./GeneralInfo";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0)
  const [showEffect, setShowEffect] = useState(true);

  const handleSecondCounter = (counter) => {
    console.log(counter);
    setSecondCounter(prev => prev + 1);
  }

  const handleFirstCounter = () => {
    setCounter(prev => prev + 1)
  }

  const handleShowEffect = () => {
    setShowEffect(!showEffect)
  }

  return (
    <>
      <Child counter={counter} handleClick={handleShowEffect} />
      <Child counter={secondCounter} handleClick={handleSecondCounter}/>

      <GeneralInfo firstCounter={counter}  secondCounter={secondCounter}/>

      {showEffect && <Effects />}
    </>
  );
};

export default App;
