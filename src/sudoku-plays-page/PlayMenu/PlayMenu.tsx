import { TParentComponent } from 'types';

import styles from './PlayMenu.module.scss';

export interface IPlayMenuProps {}

export const PlayMenu: TParentComponent<IPlayMenuProps> = (props) => {
  return <ul class={styles.playmenu}>{props.children}</ul>;
};
