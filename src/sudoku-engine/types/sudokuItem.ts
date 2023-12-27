import { TSudokuValue } from './values';

export type TSudokuItemState = {
  readonly value: TSudokuValue;
  readonly isReadOnly: boolean;
  readonly isWrong: boolean;
};

export enum ESudokuBunchOperations {
  LOCK = 'lock',
  UNLOCK = 'unlock',
}

export type TSudokuItemHandlers = {
  getState: () => TSudokuItemState;
  setValue: (value: TSudokuValue) => void;
  lock: () => void;
  unlock: () => void;
};

export type TSudokuItem = TSudokuItemState & TSudokuItemHandlers;
