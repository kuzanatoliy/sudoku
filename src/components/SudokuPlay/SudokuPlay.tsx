import { Index, createSignal, createEffect } from 'solid-js';
import { TComponent } from 'types';
import {
  SudokuBattle,
  TSudokuBattle,
  TSudokuItemState,
  TSudokuValue,
  isEffectedItem,
} from 'sudoku-engine';

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
  let play: TSudokuBattle;
  const [playState, setStatePlay] = createSignal<TSudokuItemState[]>([]);
  const [focusedField, setFocusedField] = createSignal(-1);

  createEffect(() => {
    play = new SudokuBattle(props.initialPlay);
    setStatePlay(play.getState());
  });

  return (
    <div class={styles.sudokuplay}>
      <Index each={playState()}>
        {(item, index) => (
          <SudokuField
            class={getItemClasses(index)}
            value={item().value}
            isDisabled={item().isReadOnly}
            isError={item().isWrong}
            isHighlighted={isEffectedItem(index, focusedField())}
            onFocus={() => {
              setFocusedField(index);
            }}
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
