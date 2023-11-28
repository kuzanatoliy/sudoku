import { TComponent } from 'types';

import styles from './SudokuField.module.scss';

export type TSudokuValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export const isSudokuValue = (value: number): value is TSudokuValue =>
  value >= 0 && value <= 9;

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
