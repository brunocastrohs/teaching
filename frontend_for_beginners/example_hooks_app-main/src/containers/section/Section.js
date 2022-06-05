import React from 'react';
import './Section.css';

const Section = (props) => {

    const {className, children} = props;
    
    return (

        <div className={className}>
          {children}
        </div>
      );
  
}

export default Section;
