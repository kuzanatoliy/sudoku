import { For, Show } from 'solid-js';
import { TSudokuValue } from 'sudoku-engine';
import { TComponent } from 'types';

import styles from './PlayPreview.module.scss';

export interface IPlayPreviewProps {
  play: TSudokuValue[];
}

export const PlayPreview: TComponent<IPlayPreviewProps> = (props) => {
  return (
    <div class={styles.playpreview}>
      <For each={props.play}>
        {(item) => (
          <div class={styles.playpreview_cell}>
            <Show when={item !== 0}>{item}</Show>
          </div>
        )}
      </For>
    </div>
  );
};
