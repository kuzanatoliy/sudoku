export const enum ETextareaFieldSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export interface ITextareaFieldProps {
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  placeholder?: string;
  label?: string;
  size?: ETextareaFieldSize;
  helperMessage?: string;
  rows?: number;
  class?: string;
  isError?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  'aria-label'?: string;
}
