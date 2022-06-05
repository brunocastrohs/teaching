import React from 'react';
import './Header.css';

const Header = () => {
  
  return (
      <div className="flex-row justify-center">
        <h1>{process.env.REACT_APP_TITLE}</h1>
      </div>
    );

}


export default Header;
