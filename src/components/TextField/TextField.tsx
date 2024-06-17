import { mergeProps } from 'solid-js';
import { TComponent } from 'types';

import styles from './TextField.module.scss';

/* export const enum ETextFieldVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
} */

/* export const enum ETextFieldSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
} */

export interface ITextFieldProps {
  value: string;
  /*onClick?: () => void;
  class?: string;
  variant?: ETextFieldVariant;
  size?: ETextFieldSize;
  isDisabled?: false;
  isFullWidth?: false;*/
}

const DEFAULT_TEXT_FIELD_PROPS = {
  /* onClick: () => {},
  variant: ETextFieldVariant.CONTAINED,
  size: ETextFieldSize.MEDIUM,
  isDisabled: false,
  isFullWidth: false, */
};

export const TextField: TComponent<ITextFieldProps> = (props) => {
  const localProps = mergeProps(DEFAULT_TEXT_FIELD_PROPS, props);

  console.log(localProps);

  return <input value={localProps.value} class={styles.input} />;
};
