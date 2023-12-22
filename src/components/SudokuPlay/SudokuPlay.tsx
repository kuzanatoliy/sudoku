import { Index, createSignal, createEffect } from 'solid-js';
import { TComponent } from 'types';
import { SudokuBattle, TSudokuValue } from 'sudoku-engine';

import { SudokuField } from '../SudokuField';

import styles from './SudokuPlay.module.scss';

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

export interface ISudokuPlayProps {
  initialPlay: TSudokuValue[];
}

export const SudokuPlay: TComponent<ISudokuPlayProps> = (props) => {
  console.log('hm');
  const play = new SudokuBattle(props.initialPlay);

  createEffect(() => {
    console.log(props.initialPlay);
  });

  const [playState, setStatePlay] = createSignal(play.getState());
  return (
    <div class={styles.sudokuplay}>
      <Index each={playState()}>
        {(item, index) => (
          <SudokuField
            class={getItemClasses(index)}
            value={item().value}
            isDisabled={item().isReadOnly}
            isError={item().isWrong}
            onChange={(value) => {
              play.setValue(index, value);
              setStatePlay(play.getState());
            }}
          />
        )}
      </Index>
    </div>
  );
};
