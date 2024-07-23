export const enum EDetailsSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export interface IDetailsProps {
  summary?: string;
  class?: string;
  size?: EDetailsSize;
  isAutoOpened?: boolean;
}
