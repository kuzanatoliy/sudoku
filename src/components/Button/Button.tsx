import { mergeProps } from 'solid-js';
import { TParentComponent } from 'types';

import styles from './Button.module.scss';

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
  isDisabled?: false;
  isFullWidth?: false;
}

/* c8 ignore start */
const defaultProps = {
  onClick: () => {},
  variant: EButtonVariant.CONTAINED,
  size: EButtonSize.MEDIUM,
  isDisabled: false,
  isFullWidth: false,
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
      disabled={localProps.isDisabled}
      data-variant={localProps.variant}
      data-size={localProps.size}
      data-full-width={localProps.isFullWidth}
    >
      {localProps.children}
    </button>
  );
};
