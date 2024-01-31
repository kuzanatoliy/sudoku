import { mergeProps } from 'solid-js';
import { TParentComponent } from 'types';

import styles from './Button.module.scss';

export interface IButtonProps {
  onClick?: () => void;
}

/* c8 ignore start */
const defaultProps = {
  onClick: () => {},
};
/* c8 ignore end */

export const Button: TParentComponent<IButtonProps> = (props) => {
  const localProps = mergeProps(defaultProps, props);

  return (
    <button class={styles.button} onClick={() => localProps.onClick()}>
      {localProps.children}
    </button>
  );
};
