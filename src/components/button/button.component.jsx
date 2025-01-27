import React from 'react';

const variants = {
  primary: 'bg-blue-500 hover:bg-blue-600 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700',
  outline: 'border border-gray-300 hover:bg-gray-50 text-gray-700',
  danger: 'bg-red-500 hover:bg-red-600 text-white',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
};

export const Button = React.forwardRef(({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  ...props
}, ref) => {
  const variantClasses = variants[variant];
  const sizeClasses = sizes[size];

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={`
        inline-flex 
        items-center 
        justify-center 
        rounded-md 
        font-medium 
        transition-colors 
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-500 
        focus:ring-offset-2
        disabled:cursor-not-allowed 
        disabled:opacity-50
        ${variantClasses}
        ${sizeClasses}
        ${className}
      `}
      {...props}
    >
      {isLoading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!isLoading && leftIcon && (
        <span className="mr-2">{leftIcon}</span>
      )}
      {children}
      {!isLoading && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </button>
  );
});

Button.displayName = 'Button';