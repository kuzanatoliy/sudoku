import { For, createSignal } from 'solid-js';
import { TComponent } from 'types';
import { SudokuField, TSudokuValue } from '../SudokuField';

import styles from './SudokuPlay.module.scss';

const PLAY: TSudokuValue[] = [
  1, 2, 0, 5, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 9, 2, 0, 3, 0, 0, 0, 0, 0, 1, 0,
  0, 9, 0, 0, 4, 0, 0, 0, 5, 6, 7, 0, 0, 9, 0, 0, 0, 0, 0, 4, 0, 2, 0, 6, 0, 0,
  0, 0, 5, 0, 3, 2, 0, 9, 6, 4, 0, 0, 0, 0, 6, 0, 0, 0, 3, 0, 2, 7, 0, 0, 0, 3,
  0, 0, 0,
];

const getItemClasses = (index: number) => {
  const classes = [];
  if (index % 3 === 0 && index % 9 !== 0) {
    classes.push(styles['sudokuplay_leftborder']);
  }
  if ((index > 17 && index < 27) || (index > 44 && index < 54)) {
    classes.push(styles['sudokuplay_bottomborder']);
  }
  return classes.join(' ');
};

export interface ISudokuPlayProps {}

export const SudokuPlay: TComponent<ISudokuPlayProps> = () => {
  const [play] = createSignal(PLAY);
  return (
    <div class={styles.sudokuplay}>
      <For each={play()}>
        {(item, index) => (
          <SudokuField
            class={getItemClasses(index())}
            value={item}
            onChange={() => console.log(item)}
          />
        )}
      </For>
    </div>
  );
};
