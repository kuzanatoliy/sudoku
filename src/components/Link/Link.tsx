import { mergeProps } from 'solid-js';
import { TParentComponent } from 'types';

import { ILinkProps } from './Link.types';

//import styles from './Link.module.scss';

const DEFAULT_DETAILS_PROPS = {
  //size: ELinkSize.MEDIUM,
};

export const Link: TParentComponent<ILinkProps> = (props) => {
  const localProps = mergeProps(DEFAULT_DETAILS_PROPS, props);

  return (
    <div
    //role='group'
    //class={
    //  localProps.class ? `${styles.card} ${localProps.class}` : styles.card
    //}
    //data-size={localProps.size}
    >
      {localProps.children}
    </div>
  );
};
