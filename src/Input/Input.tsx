import React from 'react';
import './Input.css';
import { InputProps } from './inputTypes';

const sizeClasses: Record<'S' | 'M' | 'L', string> = {
  S: 'input--size-s',
  M: 'input--size-m',
  L: 'input--size-l',
};

const statusClasses: Record<'valid' | 'error', string> = {
  valid: 'input--status-valid',
  error: 'input--status-error',
};

const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>((props, ref) => {
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
    multiline = false,
    rows = 3,
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
    disabled && 'input--disabled',
    multiline && 'input--multiline'
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
        
        {multiline ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={inputClasses}
            style={style}
            disabled={disabled}
            rows={rows}
            {...restProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={inputClasses}
            style={style}
            disabled={disabled}
            {...restProps as React.InputHTMLAttributes<HTMLInputElement>}
          />
        )}
        
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