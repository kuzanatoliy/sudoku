import { TSudokuValue } from '../types';

export const isSudokuValue = (value: number): value is TSudokuValue =>
  value >= 0 && value <= 9;
