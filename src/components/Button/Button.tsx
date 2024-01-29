import { mergeProps } from 'solid-js';
import { TParentComponent } from 'types';

import styles from './Button.module.scss';

interface IButton {
  onClick?: () => void;
}

const defaultProps = {
  onClick: () => {},
};

export const Button: TParentComponent<IButton> = (props) => {
  const localProps = mergeProps(defaultProps, props);

  return (
    <button class={styles.button} onClick={() => localProps.onClick()}>
      {localProps.children}
    </button>
  );
};
