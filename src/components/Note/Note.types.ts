export const enum ENoteVariant {
  BLANKED = 'blanked',
  OUTLINED = 'outlined',
}

export const enum ENoteSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export interface INoteProps {
  label?: string;
  message?: string;
  class?: string;
  variant?: ENoteVariant;
  size?: ENoteSize;
}
