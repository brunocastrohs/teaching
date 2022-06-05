import React from 'react';
import InputWithLabelProps from './types';

  const InputWithLabel = ({
    id,
    label,
    value,
    type = 'text',
    onInputChange
  } : InputWithLabelProps) => (
    <div className='InputWithLabel'>
      <label htmlFor={id}>{label}</label>
      &nbsp;
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );

export default InputWithLabel;