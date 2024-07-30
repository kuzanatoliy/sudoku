import { mergeProps, createSignal, onMount } from 'solid-js';
import { ArrowDownIcon } from 'icons';
import { TParentComponent } from 'types';

import { EDetailsSize, IDetailsProps } from './Details.types';

import styles from './Details.module.scss';

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
    <details
      class={
        localProps.class
          ? `${localProps.class} ${styles.details}`
          : styles.details
      }
      open={isOpened()}
      data-size={localProps.size}
    >
      <summary class={styles.details_summary}>
        <ArrowDownIcon />
        {localProps.summary}
      </summary>
      <div class={styles.details_content}>{localProps.children}</div>
    </details>
  );
};
