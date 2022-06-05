import React from 'react';
import './Section.css';
import SectionProps from './Section.types'

const Section = (props: SectionProps) => {

  const {children} = props;
  
  return (

      <div className='container'>
        {children}
      </div>
    );

}


export default Section;
