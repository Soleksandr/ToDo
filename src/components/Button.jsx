import React from 'react';

function Button({ type, value, onClick, className }) {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
    >
      {value}
    </button>
  );
}

export default Button;
