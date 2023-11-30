import { TSudokuValue } from './values';

export type TSudokuItemState = {
  readonly value: TSudokuValue;
  readonly isReadOnly: boolean;
  readonly isWrong: boolean;
};

export type TSudokuItemHandlers = {
  getState: () => TSudokuItemState;
  setValue: (value: TSudokuValue) => void;
  lock: () => void;
  unlock: () => void;
};

export type TSudokuItem = TSudokuItemState & TSudokuItemHandlers;
