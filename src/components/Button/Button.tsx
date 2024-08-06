import { mergeProps } from 'solid-js';
import { TParentComponent } from 'types';

import { EButtonSize, EButtonVariant, IButtonProps } from './Button.types';

import styles from './Button.module.scss';

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
          ? `${styles.button} ${localProps.class}`
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
