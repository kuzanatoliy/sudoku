import { Show, mergeProps } from 'solid-js';
import { v4 as uuid } from 'uuid';
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
  placeholder?: string;
  label?: string;
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

  let inputRef;

  const inputId = uuid();

  return (
    <div class={styles.textfield_root}>
      <Show when={localProps.label}>
        <label for={inputId} class={styles.textfield_label}>
          {localProps.label}
        </label>
      </Show>
      <div
        class={styles.textfield_input_container}
        onClick={() => inputRef!.focus()}
      >
        <input
          id={inputId}
          ref={inputRef}
          value={localProps.value}
          placeholder={localProps.placeholder}
          class={styles.textfield_input}
        />
      </div>
    </div>
  );
};
