import { mergeProps } from 'solid-js';
import { TParentComponent } from 'types';

import styles from './Button.module.scss';

export const enum EButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
}

export interface IButtonProps {
  onClick?: () => void;
  class?: string;
  variant?: EButtonVariant;
}

/* c8 ignore start */
const defaultProps = {
  onClick: () => {},
  variant: EButtonVariant.CONTAINED,
};
/* c8 ignore end */

export const Button: TParentComponent<IButtonProps> = (props) => {
  const localProps = mergeProps(defaultProps, props);

  return (
    <button
      class={
        localProps.class
          ? `${localProps.class} ${styles.button}`
          : styles.button
      }
      onClick={() => localProps.onClick()}
      data-variant={localProps.variant}
    >
      {localProps.children}
    </button>
  );
};
