import React from 'react';
import './Header.css';
import HeaderProps from './Header.types'

const Header = (props:HeaderProps) => {
  
  return (
      <header className='navbar Header'>
          <div className="container d-flex">
            <h1>{process.env.REACT_APP_TITLE}</h1>
            {props.children}
          </div>
      </header>
    );

}


export default Header;
