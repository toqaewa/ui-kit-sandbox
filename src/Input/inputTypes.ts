export type InputSize = 'S' | 'M' | 'L';
export type InputStatus = 'valid' | 'error';

export interface BaseInputProps {
  size?: InputSize;
  status?: InputStatus;
  icon?: React.ReactNode;
  helperText?: string;
  helperTextIcon?: React.ReactNode;
  afterText?: string;
  label?: string;
  multiline?: boolean;
  rows?: number;
}

export type InputProps = BaseInputProps & (
  | { multiline?: false } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>
  | { multiline: true } & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>
);