export const enum ESkeletonVariant {
  BOX = 'box',
  ROUNDED = 'rounded',
  CIRCLE = 'circle',
}

export interface ISkeletonProps {
  width?: number;
  height?: number;
  class?: string;
  variant?: ESkeletonVariant;
}
