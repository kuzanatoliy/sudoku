export const enum ESkeletonVariant {
  BOX = 'box',
  ROUNDED = 'rounded',
  CIRCLE = 'circle',
}

export interface ISkeletonProps {
  width?: string;
  height?: string;
  class?: string;
  variant?: ESkeletonVariant;
}
