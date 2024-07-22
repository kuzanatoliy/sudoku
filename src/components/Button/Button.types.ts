export const enum EButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
}

export const enum EButtonSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export interface IButtonProps {
  onClick?: () => void;
  class?: string;
  variant?: EButtonVariant;
  size?: EButtonSize;
  isDisabled?: boolean;
  isFullWidth?: boolean;
}
