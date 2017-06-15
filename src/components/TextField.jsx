import React from 'react';

const TextField = ({ className, value, onChange, onBlur }) => {
  return (<input
    type="text"
    className={className}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
  />);
}

export default TextField;
