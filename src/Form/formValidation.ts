import { FormData, FormErrors, FormFieldConfig } from './formTypes';

export const validateField = (value: any, fieldConfig: FormFieldConfig, allData?: FormData): string | null => {
  const { validation } = fieldConfig;

  if (!value || (typeof value === 'string' && !value.trim())) {
    return 'Пожалуйста, заполните поле';
  }

  if (!value) {
    return null;
  }

  if (validation?.minLength && typeof value === 'string' && value.length < validation.minLength) {
    return `Поле должно содержать больше ${validation.minLength} символов`;
  }

  if (validation?.maxLength && typeof value === 'string' && value.length > validation.maxLength) {
    return `Поле не может содержать больше ${validation.maxLength} символов`;
  }

  if (validation?.pattern && typeof value === 'string' && !validation.pattern.test(value)) {
    return 'Неверный формат';
  }

  if (validation?.custom) {
    return validation.custom(value, allData);
  }

  if (fieldConfig.type === 'email' && typeof value === 'string' && value.trim()) {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(value)) {
      return 'Введите корректный email адрес';
    }
  }

  return null;
};

export const validateForm = (formData: FormData, fields: FormFieldConfig[]): FormErrors => {
  const errors: FormErrors = {};

  fields.forEach(field => {
    const error = validateField(formData[field.name], field, formData);
    if (error) {
      errors[field.name] = error;
    }
  });

  return errors;
};

export const isFormValid = (errors: FormErrors): boolean => {
  return Object.keys(errors).length === 0;
};