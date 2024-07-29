export const enum ENoteSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export interface INoteProps {
  summary?: string;
  class?: string;
  size?: ENoteSize;
  isAutoOpened?: boolean;
}
