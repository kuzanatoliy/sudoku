import { Show, mergeProps } from 'solid-js';
import { v4 as uuid } from 'uuid';
import { TComponent } from 'types';

import {
  ETextFieldType,
  ETextFieldSize,
  ITextFieldProps,
} from './TextField.types';

import styles from './TextField.module.scss';

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
  const helperTextId = uuid();

  return (
    <div
      role='group'
      class={
        localProps.class
          ? `${localProps.class} ${styles.textfield_root}`
          : styles.textfield_root
      }
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
          class={styles.textfield_input}
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
        <p id={helperTextId} class={styles.textfield_helper_message}>
          {localProps.helperMessage}
        </p>
      </Show>
    </div>
  );
};
