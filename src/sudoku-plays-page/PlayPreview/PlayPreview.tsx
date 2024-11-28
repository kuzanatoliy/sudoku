import { For } from 'solid-js';
import { TSudokuValue } from 'sudoku-engine';
import { TComponent } from 'types';

import styles from './PlayPreview.module.scss';

export interface IPlayPreviewProps {
  play: TSudokuValue[];
  //size?: ESudokuFieldSize;
}

export const PlayPreview: TComponent<IPlayPreviewProps> = (props) => {
  return (
    <div class={styles.container}>
      <For each={props.play}>{(item) => <div>{item}</div>}</For>
    </div>
  );
};
