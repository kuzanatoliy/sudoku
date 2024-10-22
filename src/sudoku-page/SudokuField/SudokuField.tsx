import { mergeProps } from 'solid-js';
import { TComponent } from 'types';
import { TSudokuValue, isSudokuValue } from 'sudoku-engine';

import { ESudokuFieldSize } from '../types';

import styles from './SudokuField.module.scss';

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
  tabIndex?: number;
  ref?: HTMLDivElement | ((el: HTMLDivElement) => void);
}

const defaultProps = {
  size: ESudokuFieldSize.LARGE,
  isDisabled: false,
  isHighlighted: false,
  isError: false,
  tabIndex: -1,
};

export const SudokuField: TComponent<ISudokuFieldProps> = (props) => {
  const localProps = mergeProps(defaultProps, props);

  return (
    <div
      tabIndex={localProps.tabIndex}
      class={
        localProps.class
          ? `${styles.sudokufield} ${localProps.class}`
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
      data-size={localProps.size}
      data-highlighted={localProps.isHighlighted}
      data-error={localProps.isError}
      ref={localProps.ref}
    >
      {localProps.value || ''}
    </div>
  );
};
