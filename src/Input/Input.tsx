import React from 'react';
import './Input.css'

type InputSize = 'S' | 'M' | 'L';
type InputStatus = 'valid' | 'error';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  status?: InputStatus;
  icon?: React.ReactNode;
  helperText?: string;
  helperTextIcon?: React.ReactNode;
  afterText?: string;
}

const sizeClasses: Record<InputSize, string> = {
  S: 'input--size-s',
  M: 'input--size-m',
  L: 'input--size-l',
};

const statusClasses: Record<InputStatus, string> = {
  valid: 'input--status-valid',
  error: 'input--status-error',
};

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    size = 'M',
    status,
    icon,
    helperText,
    helperTextIcon,
    afterText,
    className,
    style,
    disabled,
    ...restProps
  } = props;

  const containerClasses = [
    'input-container',
    disabled ? 'input--disabled' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    'input',
    sizeClasses[size],
    status && statusClasses[status],
    icon && 'input--with-icon',
    afterText && 'input--with-after-text',
    disabled && 'input--disabled'
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      <div className="input-wrapper">
        {icon && (
          <div className="input__icon">
            {icon}
          </div>
        )}
        
        <input
          ref={ref}
          className={inputClasses}
          style={style}
          disabled={disabled}
          {...restProps}
        />
        
        {afterText && (
          <div className="input__after-text">
            {afterText}
          </div>
        )}
      </div>

      {helperText && (
        <div className={`input-helper-text ${status ? `input-helper-text--${status}` : ''}`}>
          {helperTextIcon && (
            <span className="input-helper-text__icon">
              {helperTextIcon}
            </span>
          )}
          {helperText}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;