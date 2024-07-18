import { mergeProps, createSignal, onMount } from 'solid-js';
import { ArrowDownIcon } from 'icons';
import { TParentComponent } from 'types';

import styles from './Details.module.scss';

export const enum EDetailsSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

/* c8 ignore start */
export interface IDetailsProps {
  summary?: string;
  class?: string;
  size?: EDetailsSize;
  isAutoOpened?: boolean;
}
/* c8 ignore end */

const DEFAULT_DETAILS_PROPS = {
  summary: '',
  size: EDetailsSize.MEDIUM,
  isAutoOpened: false,
};

export const Details: TParentComponent<IDetailsProps> = (props) => {
  const localProps = mergeProps(DEFAULT_DETAILS_PROPS, props);

  const [isOpened, setIsOpened] = createSignal(false);

  onMount(() => {
    setIsOpened(localProps.isAutoOpened);
  });

  return (
    <details class={styles.details} open={isOpened()}>
      <summary class={styles.details_summary}>
        <ArrowDownIcon />
        {localProps.summary}
      </summary>
      <div class={styles.details_content}>{localProps.children}</div>
    </details>
  );
};
