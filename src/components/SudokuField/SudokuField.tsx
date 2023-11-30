import { TComponent } from 'types';
import { TSudokuValue, isSudokuValue } from 'sudoku-engine';

import styles from './SudokuField.module.scss';

export interface ISudokuFieldProps {
  value: TSudokuValue;
  onChange: (value: TSudokuValue) => void;
  class?: string;
}

export const SudokuField: TComponent<ISudokuFieldProps> = (props) => (
  <div
    tabIndex={0}
    class={
      props.class ? `${props.class} ${styles.sudokufield}` : styles.sudokufield
    }
    onKeyDown={(event) => {
      const value = Number(event.key);
      if (isSudokuValue(value)) {
        props.onChange(value);
        event.stopPropagation();
      } else if (event.key === 'Delete') {
        props.onChange(0);
        event.stopPropagation();
      }
    }}
  >
    {props.value || ''}
  </div>
);
