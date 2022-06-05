import React from 'react';
import './Footer.css';

const Footer = () => {
  
  return (
      <div className="container d-flex justify-content-center">
        <h5>{process.env.REACT_APP_FOOTER}</h5>
      </div>
    );


}


export default Footer;
