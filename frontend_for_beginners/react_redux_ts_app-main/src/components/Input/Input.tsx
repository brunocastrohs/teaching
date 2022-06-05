import React, {useState} from 'react';
import './Input.css';
import InputProps from './Input.types';
import {useDispatch } from 'react-redux'
import {ActionCodes} from '../../_config/redux'

const Input = (props:InputProps) => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const handleChangeValue = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchTerm(event.target.value);
  }

  const handleClick = async (event:React.MouseEvent<HTMLButtonElement>)=>{
   dispatch({type: ActionCodes.CHANGE_VALUE, parameter:searchTerm});
  }

  return (
    
    <div className="input-group w-25 Input">
      <input type="search" className="form-control" placeholder="Digite aqui o nome do livro..." aria-label="Search" aria-describedby="search-addon" onChange={handleChangeValue} />
      <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Buscar</button>
    </div>
  );

}

export default Input;
