import { mergeProps } from 'solid-js';
import { TParentComponent } from 'types';

import { ECardSize, ICardProps } from './Card.types';

import styles from './Card.module.scss';

const DEFAULT_DETAILS_PROPS = {
  size: ECardSize.MEDIUM,
};

export const Card: TParentComponent<ICardProps> = (props) => {
  const localProps = mergeProps(DEFAULT_DETAILS_PROPS, props);

  return (
    <div
      class={
        localProps.class ? `${styles.card} ${localProps.class}` : styles.card
      }
      data-size={localProps.size}
    >
      {localProps.children}
    </div>
  );
};
