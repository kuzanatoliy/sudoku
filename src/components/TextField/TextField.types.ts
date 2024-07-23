export const enum ETextFieldSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export const enum ETextFieldType {
  TEXT = 'text',
  PASSWORD = 'password',
}

export interface ITextFieldProps {
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  placeholder?: string;
  label?: string;
  type?: ETextFieldType;
  size?: ETextFieldSize;
  helperMessage?: string;
  class?: string;
  isError?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  'aria-label'?: string;
}
