import React from 'react';
import './Button.css';
import { ButtonProps } from './buttonTypes';

const variantClasses: Record<'primary' | 'secondary' | 'tertiary', string> = {
  primary: 'button--primary',
  secondary: 'button--secondary',
  tertiary: 'button--tertiary',
};

const sizeClasses: Record<'S' | 'M' | 'L', string> = {
  S: 'button--size-s',
  M: 'button--size-m',
  L: 'button--size-l',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    size = 'M',
    loading = false,
    icon,
    children,
    className,
    disabled,
    ...restProps
  } = props;

  const buttonClasses = [
    'button',
    variantClasses[variant],
    sizeClasses[size],
    loading && 'button--loading',
    icon && 'button--with-icon',
    disabled && 'button--disabled',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      ref={ref}
      className={buttonClasses}
      disabled={disabled || loading}
      {...restProps}
    >
      {loading && (
        <div className="button__spinner">
          <div className="button__spinner-dot"></div>
        </div>
      )}
      
      {icon && !loading && (
        <span className="button__icon">
          {icon}
        </span>
      )}
      
      <span className="button__content">
        {children}
      </span>
    </button>
  );
});

Button.displayName = 'Button';

export default Button;