import React from 'react';

export const Input = React.forwardRef(({ 
  className = '', 
  type = 'text',
  error,
  ...props 
}, ref) => {
  return (
    <div className="relative">
      <input
        type={type}
        className={`
          w-full 
          px-4 
          py-2 
          rounded-md 
          border 
          border-gray-300 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          focus:border-transparent
          disabled:cursor-not-allowed 
          disabled:opacity-50
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';