export const enum ECardSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export interface ICardProps {
  class?: string;
  size?: ECardSize;
}
