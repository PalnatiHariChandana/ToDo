import React from 'react';

export const Alert = ({ message, type = 'default', className = '' }) => {
  const styles = {
    default: 'bg-gray-100 text-gray-800',
    error: 'bg-red-100 text-red-800',
    success: 'bg-green-100 text-green-800',
  };

  return (
    <div className={`p-4 rounded-lg ${styles[type]} ${className}`}>
      <p className="text-sm">{message}</p>
    </div>
  );
};