import { Show, mergeProps } from 'solid-js';
import { v4 as uuid } from 'uuid';
import { TComponent } from 'types';

import styles from './TextField.module.scss';

export const enum ETextFieldSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export const enum ETextFieldType {
  TEXT = 'text',
  PASSWORD = 'password',
}

export interface ITextFieldProps {
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  placeholder?: string;
  label?: string;
  type?: ETextFieldType;
  size?: ETextFieldSize;
  helperMessage?: string;
  class?: string;
  isError?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
}

const DEFAULT_TEXT_FIELD_PROPS = {
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  value: '',
  type: ETextFieldType.TEXT,
  size: ETextFieldSize.MEDIUM,
  isError: false,
  isDisabled: false,
  isRequired: false,
};

export const TextField: TComponent<ITextFieldProps> = (props) => {
  const localProps = mergeProps(DEFAULT_TEXT_FIELD_PROPS, props);

  const inputId = uuid();
  const helperTectId = uuid();

  return (
    <div
      class={styles.textfield_root}
      aria-disabled={localProps.isDisabled}
      data-size={localProps.size}
    >
      <Show when={localProps.label}>
        <label for={inputId} class={styles.textfield_label}>
          {localProps.label}
          <Show when={localProps.isRequired}>
            <span aria-hidden={true}> *</span>
          </Show>
        </label>
      </Show>
      <div class={styles.textfield_input_container}>
        <input
          id={inputId}
          class={
            localProps.class
              ? `${localProps.class} ${styles.textfield_input}`
              : styles.textfield_input
          }
          value={localProps.value}
          type={localProps.type}
          placeholder={localProps.placeholder}
          disabled={localProps.isDisabled}
          onInput={(event) => localProps.onChange(event.target.value)}
          aria-required={localProps.isRequired}
          aria-invalid={localProps.isError}
          aria-describedby={localProps.helperMessage && helperTectId}
        />
      </div>
      <Show when={localProps.helperMessage}>
        <p id={helperTectId} class={styles.textfield_helper_message}>
          {localProps.helperMessage}
        </p>
      </Show>
    </div>
  );
};
