import React from 'react';


const Child = ({ counter, handleClick }) => {

  console.log('render child')
  

  return <div>Child value: {counter}
    <button onClick={() => handleClick(10)}>setSecondCounter</button>
  </div>
}

export default Child;