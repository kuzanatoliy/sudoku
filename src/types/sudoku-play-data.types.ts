import { TSudokuValue } from 'sudoku-engine';

export type TComplexity = 1 | 2 | 3 | 4 | 5;

export type TSudokuPlayData = {
  complexity: TComplexity;
  play: TSudokuValue[];
  result: TSudokuValue[];
};
