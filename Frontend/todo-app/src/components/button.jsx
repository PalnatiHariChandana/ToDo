import React from 'react';

export const Button = ({ 
  children, 
  onClick, 
  variant = 'default', 
  size = 'default',
  className = '',
  disabled = false 
}) => {
  const variants = {
    default: 'bg-blue-500 hover:bg-blue-600 text-white',
    outline: 'border border-gray-300 hover:bg-gray-50',
  };

  const sizes = {
    default: 'px-4 py-2',
    sm: 'px-2 py-1 text-sm',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-md font-medium
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  );
};