import React, { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './Form.css';
import { FormData, FormErrors, FormConfig } from './formTypes';
import { validateForm, isFormValid } from './formValidation';

interface FormComponentProps {
  config: FormConfig;
}

function Form({ config }: FormComponentProps) {
  const {
    title,
    description,
    fields,
    submitButtonText = 'Отправить',
    clearButtonText = 'Очистить',
    storageKey = 'formData',
    onSubmit
  } = config;

  const initialFormData: FormData = {};
  fields.forEach(field => {
    initialFormData[field.name] = field.defaultValue || '';
  });

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem(storageKey);
    
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(prev => ({
          ...prev,
          ...parsedData
        }));
      } catch (error) {
        console.error('Ошибка загрузки данных из localStorage:', error);
      }
    }
    setIsLoaded(true);
  }, [storageKey]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(storageKey, JSON.stringify(formData));
    }
  }, [formData, isLoaded, storageKey]);

  const handleInputChange = (fieldName: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
    
    if (errors[fieldName]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formErrors = validateForm(formData, fields);
    setErrors(formErrors);

    if (isFormValid(formErrors)) {
      setIsSubmitting(true);
      
      try {
        await onSubmit(formData);
        
        setFormData(initialFormData);
        localStorage.removeItem(storageKey);
        setIsSubmitted(false);
      } catch (error) {
        console.error('Ошибка отправки формы:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const getFieldStatus = (fieldName: string): 'valid' | 'error' | undefined => {
    if (!isSubmitted) return undefined;
    return errors[fieldName] ? 'error' : 'valid';
  };

  const handleClear = () => {
    setFormData(initialFormData);
    localStorage.removeItem(storageKey);
    setErrors({});
    setIsSubmitted(false);
  };

  if (!isLoaded) {
    return <div className="form-container">Загрузка...</div>;
  }

  return (
    <div className="form-container">
      <div className="form-title">{title}</div>
      {description && (
        <div className="form-description">
          {description}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="form">
        {fields.map(field => (
          <Input
            key={field.name}
            type={field.type}
            value={formData[field.name] || ''}
            onChange={handleInputChange(field.name)}
            size={field.size || 'M'}
            status={getFieldStatus(field.name)}
            helperText={isSubmitted ? errors[field.name] : ''}
            placeholder={field.placeholder}
            multiline={field.type === 'textarea'}
            rows={field.rows}
          />
        ))}

        <div className="form-actions">
          <Button 
            type="button"
            variant="tertiary"
            size="M"
            onClick={handleClear}
            disabled={isSubmitting}
          >
            {clearButtonText}
          </Button>
          <Button 
            type="submit"
            variant="primary"
            size="M"
            loading={isSubmitting}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : submitButtonText}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;