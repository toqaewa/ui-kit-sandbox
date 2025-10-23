import { InputSize } from "../Input/inputTypes";

export interface FormData {
  [key: string]: any;
}

export interface FormErrors {
  [key: string]: string | undefined;
}

export type FieldType = 'text' | 'email' | 'password' | 'textarea' | 'number' | 'tel';

export interface FormFieldConfig {
  name: string;
  type: FieldType;
  placeholder: string;
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    custom?: (value: any, allData?: FormData) => string | null;
  };
  defaultValue?: any;
  size?: InputSize;
  rows?: number;
  icon?: React.ReactNode
  afterText?: string;
  helperTextIcon?: string;
  helperText?: string;
}

export interface FormConfig {
  title: string;
  description?: string;
  fields: FormFieldConfig[];
  submitButtonText?: string;
  clearButtonText?: string;
  storageKey?: string;
  onSubmit: (data: FormData) => void | Promise<void>;
}