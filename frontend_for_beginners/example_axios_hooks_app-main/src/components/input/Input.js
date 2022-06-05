import React from 'react';
import './Input.css';

const Input = (props) => {
  
  const handleChangeValue = async (event)=>{
    await props?.callback(event.target.value);
  }

  return (
      <input type='text' placeholder='Digite para filtrar...'  onChange={handleChangeValue} ></input>
  );

}

export default Input;
