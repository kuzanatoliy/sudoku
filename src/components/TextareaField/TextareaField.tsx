import { Show, mergeProps } from 'solid-js';
import { v4 as uuid } from 'uuid';
import { TComponent } from 'types';

import { ETextareaFieldSize, ITextareaFieldProps } from './TextareaField.types';

import styles from './TextareaField.module.scss';

const DEFAULT_TEXTAREA_FIELD_PROPS = {
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  value: '',
  size: ETextareaFieldSize.MEDIUM,
  rows: 3,
  isError: false,
  isDisabled: false,
  isRequired: false,
};

export const TextareaField: TComponent<ITextareaFieldProps> = (props) => {
  const localProps = mergeProps(DEFAULT_TEXTAREA_FIELD_PROPS, props);

  const inputId = uuid();
  const helperTextId = uuid();

  return (
    <div
      role='group'
      class={
        localProps.class
          ? `${localProps.class} ${styles.textareafield_root}`
          : styles.textareafield_root
      }
      aria-disabled={localProps.isDisabled}
      data-size={localProps.size}
    >
      <Show when={localProps.label}>
        <label for={inputId} class={styles.textareafield_label}>
          {localProps.label}
          <Show when={localProps.isRequired}>
            <span aria-hidden={true}> *</span>
          </Show>
        </label>
      </Show>
      <div class={styles.textareafield_textarea_container}>
        <textarea
          id={inputId}
          class={styles.textareafield_textarea}
          value={localProps.value}
          rows={localProps.rows}
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
        <p id={helperTextId} class={styles.textareafield_helper_message}>
          {localProps.helperMessage}
        </p>
      </Show>
    </div>
  );
};
