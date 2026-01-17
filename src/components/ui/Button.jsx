import React from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  return (
    <button 
      className={`btn btn-${variant} ${className}`} 
      onClick={onClick}
    >
      <span className="btn-content">{children}</span>
    </button>
  );
};

export default Button;
