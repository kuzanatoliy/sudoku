import { Show, mergeProps } from 'solid-js';
import { v4 as uuid } from 'uuid';
import { TComponent } from 'types';

import styles from './TextareaField.module.scss';

export const enum ETextareaFieldSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

export const enum ETextareaFieldType {
  TEXT = 'text',
  PASSWORD = 'password',
}

export interface ITextareaFieldProps {
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  placeholder?: string;
  label?: string;
  type?: ETextareaFieldType;
  size?: ETextareaFieldSize;
  helperMessage?: string;
  class?: string;
  isError?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  'aria-label'?: string;
}

/* c8 ignore start */
const DEFAULT_TEXTAREA_FIELD_PROPS = {
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  value: '',
  type: ETextareaFieldType.TEXT,
  size: ETextareaFieldSize.MEDIUM,
  isError: false,
  isDisabled: false,
  isRequired: false,
};
/* c8 ignore end */

// todo: need to add rows property
export const TextareaField: TComponent<ITextareaFieldProps> = (props) => {
  const localProps = mergeProps(DEFAULT_TEXTAREA_FIELD_PROPS, props);

  const inputId = uuid();
  const helperTextId = uuid();

  return (
    <div
      role='group'
      class={
        localProps.class
          ? `${localProps.class} ${styles.TextareaField_root}`
          : styles.TextareaField_root
      }
      aria-disabled={localProps.isDisabled}
      data-size={localProps.size}
    >
      <Show when={localProps.label}>
        <label for={inputId} class={styles.TextareaField_label}>
          {localProps.label}
          <Show when={localProps.isRequired}>
            <span aria-hidden={true}> *</span>
          </Show>
        </label>
      </Show>
      <div class={styles.TextareaField_input_container}>
        <input
          id={inputId}
          class={styles.TextareaField_input}
          value={localProps.value}
          type={localProps.type}
          placeholder={localProps.placeholder}
          disabled={localProps.isDisabled}
          onInput={(event) => localProps.onChange(event.target.value)}
          onFocus={() => localProps.onFocus()}
          onBlur={() => localProps.onBlur()}
          aria-label={localProps['aria-label']}
          aria-required={localProps.isRequired}
          aria-invalid={localProps.isError}
          aria-describedby={localProps.helperMessage && helperTextId}
        />
      </div>
      <Show when={localProps.helperMessage}>
        <p id={helperTextId} class={styles.TextareaField_helper_message}>
          {localProps.helperMessage}
        </p>
      </Show>
    </div>
  );
};
