import { TComponent } from 'types';
import { TSudokuValue, isSudokuValue } from 'sudoku-engine';

import styles from './SudokuField.module.scss';
import { mergeProps } from 'solid-js';

export const enum ESudokuFieldSize {
  DEFAULT = 'default',
  SMALL = 'small',
  MIDDLE = 'middle',
  LARGE = 'large',
}

export interface ISudokuFieldProps {
  value: TSudokuValue;
  onChange: (value: TSudokuValue) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  class?: string;
  size?: ESudokuFieldSize;
  isDisabled?: boolean;
  isHighlighted?: boolean;
  isError?: boolean;
}

const defaultProps = {
  size: ESudokuFieldSize.DEFAULT,
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
          ? `${localProps.class} ${styles.sudokufield} ${
              styles[`sudokufield__${localProps.size}`]
            }`
          : `${styles.sudokufield} ${styles[`sudokufield__${localProps.size}`]}`
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
      onFocus={() => {
        if (props.onFocus) {
          props.onFocus();
        }
      }}
      onBlur={() => {
        if (props.onBlur) {
          props.onBlur();
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
