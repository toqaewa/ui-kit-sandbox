import React, { useState, ChangeEvent } from 'react';
import './Checkbox.css';

interface CheckboxProps {
  initialValue?: boolean;
  onChange?: (isChecked: boolean) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
  id?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  initialValue = false,
  onChange,
  disabled = false,
  className = '',
  label = '',
  id = `checkbox-${Math.random().toString(36).substr(2, 9)}`,
}) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const newValue = e.target.checked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  const checkboxClasses = [
    'checkbox',
    disabled ? 'checkbox--disabled' : '',
    className,
  ].join(' ').trim();

  return (
    <div className={checkboxClasses}>
      <label htmlFor={id} className="checkbox__label">
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className="checkbox__input"
        />
        <span className="checkbox__custom" />
        {label && <span className="checkbox__text">{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;