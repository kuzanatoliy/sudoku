import { TParentComponent } from 'types';

import styles from './PlayMenu.module.scss';

export interface IPlayMenuProps {
  //initialPlay: TSudokuValue[];
  //size?: ESudokuFieldSize;
}

export const PlayMenu: TParentComponent<IPlayMenuProps> = (props) => {
  return <ul class={styles.playmenu}>{props.children}</ul>;
};
