import React from 'react';
import './Input.css';

const Input = (props) => {
  
  const handleChangeValue = (event) => {
    props?.callback(event.target.value);
  }

  return (
        <div className="Input">
          <label>{props?.label} </label>
          <input type='text' onChange={handleChangeValue}/>
        </div>
      );
      
  

}

export default Input;
