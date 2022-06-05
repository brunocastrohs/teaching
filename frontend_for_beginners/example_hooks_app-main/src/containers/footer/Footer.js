import React from 'react';
import './Footer.css';

const Footer = (props) => {
  
    return (
        <div className="Footer">
          <span>{props?.description}</span>
        </div>
      );
  

}

export default Footer;
