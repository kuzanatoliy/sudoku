// import { mergeProps, createSignal, onMount } from 'solid-js';
import { ExclamationMarkIcon } from 'icons';
import { TParentComponent } from 'types';

// import { ENoteSize, INoteProps } from './Note.types';

import styles from './Note.module.scss';

/*const DEFAULT_DETAILS_PROPS = {
  summary: '',
  size: ENoteSize.MEDIUM,
  isAutoOpened: false,
};*/

export const Note: TParentComponent = () => {
  return (
    <div class={styles.note}>
      <ExclamationMarkIcon />
      <p class={styles.note_content}>
        <strong>Note: </strong> Some notification
      </p>
    </div>
  );
};
