import React, { useEffect, useState } from 'react';

const array = [{ name: 'name', lastName: 'lastName'},{ name: 'name1', lastName: 'lastName1'},{ name: 'name2', lastName: 'lastName2'}];

const GeneralInfo = ({ firstCounter, secondCounter}) => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false),1000)
  // }, [])

  // if(loading) return <div>Loading...</div>

  if(!firstCounter && !secondCounter) return null;

  return <div>
    <h2>GeneralInfo</h2>
    {!!firstCounter && <div>First: {firstCounter}</div>}
    {secondCounter ? <div>Second: {secondCounter}</div> : null}
    {array.map((item, index) => {

      return <div key={`${item.name}_${item.lastName}`}>{item.lastName} {item.name}</div>
    })}
  </div>
}

export default GeneralInfo;