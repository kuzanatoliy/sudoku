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
import { ESudokuFieldSize } from '../types';

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
  size?: ESudokuFieldSize;
}

export const SudokuPlay: TComponent<ISudokuPlayProps> = (props) => {
  let play: TSudokuBattle;
  let fieldRefs: HTMLDivElement[];
  const [playState, setStatePlay] = createSignal<TSudokuItemState[]>([]);
  const [focusedField, setFocusedField] = createSignal(-1);

  createEffect(() => {
    play = new SudokuBattle(props.initialPlay);
    const state = play.getState();
    setStatePlay(state);
    fieldRefs = new Array(state.length);
  });

  const onFieldBlur = () => {
    setFocusedField(-1);
  };

  return (
    <div
      class={styles.sudokuplay}
      onKeyDown={(event) => {
        console.log(fieldRefs);
        let item = null;
        switch (event.key) {
          case 'ArrowUp':
            event.stopImmediatePropagation();
            event.preventDefault();
            item = focusedField() - 9;
            if (item < 0) {
              item += 81;
            }
            fieldRefs[item].focus();
            break;
          case 'ArrowDown':
            event.stopImmediatePropagation();
            event.preventDefault();
            item = focusedField() + 9;
            if (item > 80) {
              item -= 81;
            }
            fieldRefs[item].focus();
            break;
          case 'ArrowLeft':
            event.stopImmediatePropagation();
            event.preventDefault();
            item = focusedField();
            if (item % 9 === 0) {
              item += 8;
            } else {
              item--;
            }
            fieldRefs[item].focus();
            break;
          case 'ArrowRight':
            event.stopImmediatePropagation();
            event.preventDefault();
            item = focusedField();
            if (item % 9 === 8) {
              item -= 8;
            } else {
              item++;
            }
            fieldRefs[item].focus();
            break;
        }
      }}
    >
      <Index each={playState()}>
        {(item, index) => (
          <SudokuField
            size={props.size}
            class={getItemClasses(index)}
            value={item().value}
            isDisabled={item().isReadOnly}
            isError={item().isWrong}
            tabIndex={index === 0 ? 0 : -1}
            isHighlighted={
              focusedField() !== -1 && isEffectedItem(index, focusedField())
            }
            onFocus={() => {
              setFocusedField(index);
            }}
            onBlur={onFieldBlur}
            onChange={(value) => {
              play.setValue(index, value);
              setStatePlay(play.getState());
            }}
            ref={(el) => (fieldRefs[index] = el)}
          />
        )}
      </Index>
    </div>
  );
};
