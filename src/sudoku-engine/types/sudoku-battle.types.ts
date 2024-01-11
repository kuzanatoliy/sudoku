import { TSudokuItemState } from './sudoku-item.types';
import { TSudokuValue } from './values';

export type TSudokuBattle = {
  setValue: (index: number, value: TSudokuValue) => void;
  getState: () => TSudokuItemState[];
};
