export const enum EPillSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export const enum EPillVariant {
  BLANKED = 'blanked',
  FILLED = 'filled',
  OUTLINED = 'outlined',
}

export interface IPillProps {
  variant?: EPillVariant;
  size?: EPillSize;
  class?: string;
}
