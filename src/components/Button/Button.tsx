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

/* c8 ignore start */
export interface IButtonProps {
  onClick?: () => void;
  class?: string;
  variant?: EButtonVariant;
  size?: EButtonSize;
  isDisabled?: boolean;
  isFullWidth?: boolean;
}
/* c8 ignore end */

const DEFAULT_BUTTON_PROPS = {
  onClick: () => {},
  variant: EButtonVariant.CONTAINED,
  size: EButtonSize.MEDIUM,
  isDisabled: false,
  isFullWidth: false,
};

export const Button: TParentComponent<IButtonProps> = (props) => {
  const localProps = mergeProps(DEFAULT_BUTTON_PROPS, props);

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
