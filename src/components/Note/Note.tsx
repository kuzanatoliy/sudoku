import { mergeProps, Show } from 'solid-js';
import { ExclamationMarkIcon } from 'icons';
import { TComponent } from 'types';

import { ENoteVariant, ENoteSize, INoteProps } from './Note.types';

import styles from './Note.module.scss';

const DEFAULT_NOTE_PROPS = {
  label: '',
  message: '',
  size: ENoteSize.MEDIUM,
  variant: ENoteVariant.OUTLINED,
};

export const Note: TComponent<INoteProps> = (props) => {
  const localProps = mergeProps(DEFAULT_NOTE_PROPS, props);

  return (
    <div
      role='group'
      data-size={localProps.size}
      class={
        localProps.class ? `${localProps.class} ${styles.note}` : styles.note
      }
    >
      <ExclamationMarkIcon />
      <p class={styles.note_content}>
        <Show when={!!localProps.label}>
          <strong>
            {localProps.label}
            {': '}
          </strong>
        </Show>
        {localProps.message}
      </p>
    </div>
  );
};
