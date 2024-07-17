import { mergeProps, createSignal, onMount } from 'solid-js';
import { TParentComponent } from 'types';

// import styles from './Details.module.scss';

export const enum EDetailsVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
}

export const enum EDetailsSize {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

/* c8 ignore start */
export interface IDetailsProps {
  summary?: string;
  class?: string;
  variant?: EDetailsVariant;
  size?: EDetailsSize;
  isAutoOpened?: boolean;
}
/* c8 ignore end */

const DEFAULT_DETAILS_PROPS = {
  summary: '',
  variant: EDetailsVariant.CONTAINED,
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
    <details open={isOpened()}>
      <summary>{localProps.summary}</summary>
      {localProps.children}
    </details>
  );
};
