import { mergeProps } from 'solid-js';
import { TParentComponent } from 'types';

import { EPillSize, EPillVariant, IPillProps } from './Pill.types';

import styles from './Pill.module.scss';

const defaultProps = {
  children: '',
  variant: EPillVariant.FILLED,
  size: EPillSize.MEDIUM,
};

export const Pill: TParentComponent<IPillProps> = (props) => {
  const localProps = mergeProps(defaultProps, props);

  return (
    <div
      role='group'
      class={
        localProps.class ? `${localProps.class} ${styles.pill}` : styles.pill
      }
      data-variant={localProps.variant}
      data-size={localProps.size}
    >
      {localProps.children}
    </div>
  );
};
