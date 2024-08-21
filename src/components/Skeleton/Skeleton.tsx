import { mergeProps } from 'solid-js';
import { TComponent } from 'types';

import { ESkeletonVariant, ISkeletonProps } from './Skeleton.types';

import styles from './Skeleton.module.scss';

const defaultProps = {
  variant: ESkeletonVariant.BOX,
};

export const Skeleton: TComponent<ISkeletonProps> = (props) => {
  const localProps = mergeProps(defaultProps, props);

  return (
    <div
      class={
        localProps.class
          ? `${styles.skeleton} ${localProps.class}`
          : styles.skeleton
      }
      data-variant={localProps.variant}
      style={{
        height: localProps.height && `${localProps.height}px`,
        width: localProps.width && `${localProps.width}px`,
      }}
    />
  );
};
