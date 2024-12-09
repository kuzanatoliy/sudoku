import { mergeProps } from 'solid-js';
import { TParentComponent } from 'types';

import { ILinkProps, ELinkSize, ELinkColorScheme } from './Link.types';

import styles from './Link.module.scss';

const DEFAULT_DETAILS_PROPS = {
  size: ELinkSize.MEDIUM,
  colorScheme: ELinkColorScheme.DARK,
};

export const Link: TParentComponent<ILinkProps> = (props) => {
  const localProps = mergeProps(DEFAULT_DETAILS_PROPS, props);

  return (
    <a
      href={localProps.href}
      //role='group'
      class={
        localProps.class ? `${styles.link} ${localProps.class}` : styles.link
      }
      data-size={localProps.size}
      data-color-scheme={localProps.colorScheme}
    >
      {localProps.children}
    </a>
  );
};
