import { mergeProps } from 'solid-js';
import { TParentComponent } from 'types';

import { ECardSize, ICardProps } from './Card.types';

import styles from './Card.module.scss';

const DEFAULT_CARD_PROPS = {
  size: ECardSize.MEDIUM,
};

export const Card: TParentComponent<ICardProps> = (props) => {
  const localProps = mergeProps(DEFAULT_CARD_PROPS, props);

  return (
    <div
      role='group'
      class={
        localProps.class ? `${styles.card} ${localProps.class}` : styles.card
      }
      data-size={localProps.size}
    >
      {localProps.children}
    </div>
  );
};
