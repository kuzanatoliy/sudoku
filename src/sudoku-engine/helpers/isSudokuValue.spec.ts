import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { isSudokuValue } from './isSudokuValue';

describe('isSudokuValue', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it.each`
    value
    ${0}
    ${5}
    ${9}
  `('Should be true if value is sudoku value', ({ value }) => {
    expect(isSudokuValue(value)).toBeTruthy();
  });

  it('Should be false if value is not sudoku value', () => {
    expect(isSudokuValue(10)).toBeFalsy();
  });
});
