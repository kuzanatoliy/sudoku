import { TSudokuItemState } from './sudoku-item.types';
import { TSudokuValue } from './values.types';

export type TSudokuBattle = {
  setValue: (index: number, value: TSudokuValue) => void;
  isCompleted: () => boolean;
  getState: () => TSudokuItemState[];
};
