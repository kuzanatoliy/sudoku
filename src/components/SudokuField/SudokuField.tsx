import { TComponent } from 'types';
import { TSudokuValue, isSudokuValue } from 'sudoku-engine';

import styles from './SudokuField.module.scss';
import { mergeProps } from 'solid-js';

export interface ISudokuFieldProps {
  value: TSudokuValue;
  onChange: (value: TSudokuValue) => void;
  class?: string;
  isDisabled?: boolean;
  isHighlighted?: boolean;
  isError?: boolean;
}

const defaultProps = {
  isDisabled: false,
  isHighlighted: false,
  isError: false,
};

export const SudokuField: TComponent<ISudokuFieldProps> = (props) => {
  const localProps = mergeProps(defaultProps, props);

  return (
    <div
      tabIndex={localProps.isDisabled ? -1 : 0}
      class={
        localProps.class
          ? `${localProps.class} ${styles.sudokufield}`
          : styles.sudokufield
      }
      onKeyDown={(event: KeyboardEvent) => {
        if (localProps.isDisabled) {
          return;
        }

        const value = Number(event.key);
        if (isSudokuValue(value)) {
          props.onChange(value);
          event.stopPropagation();
        } else if (event.key === 'Delete') {
          props.onChange(0);
          event.stopPropagation();
        }
      }}
      aria-disabled={localProps.isDisabled}
      data-highlighted={localProps.isHighlighted}
      data-error={localProps.isError}
    >
      {localProps.value || ''}
    </div>
  );
};
