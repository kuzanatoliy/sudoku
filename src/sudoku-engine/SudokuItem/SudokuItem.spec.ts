import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { SudokuItem } from './SudokuItem';

describe('SudokuItem', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should not be readonly in default initial state if value is 0', () => {
    const item = new SudokuItem(0);
    expect(item.value).toBe(0);
    expect(item.isReadOnly).toBeFalsy();
    expect(item.isWrong).toBeFalsy();
  });

  it('Shoudl be readonly in default initial state if value is not 0', () => {
    const item = new SudokuItem(5);
    expect(item.value).toBe(5);
    expect(item.isReadOnly).toBeTruthy();
    expect(item.isWrong).toBeFalsy();
  });

  it('Should customize initial state', () => {
    const item = new SudokuItem(5, true, 3);
    expect(item.value).toBe(5);
    expect(item.isReadOnly).toBeTruthy();
    expect(item.isWrong).toBeTruthy();
  });

  it('Should get item state', () => {
    const state = new SudokuItem(0).getState();
    expect(Object.isFrozen(state)).toBeTruthy();
    expect(state.value).toBe(0);
    expect(state.isReadOnly).toBeFalsy();
    expect(state.isWrong).toBeFalsy();
  });

  describe('Should verify state changes for readonly state', () => {
    it('Should handle setValue', () => {
      const item = new SudokuItem(5, true);
      expect(item.value).toBe(5);
      item.setValue(9);
      expect(item.value).toBe(5);
    });

    it('Should handle lock', () => {
      const item = new SudokuItem(5, true);
      expect(item.isWrong).toBeFalsy();
      item.lock();
      expect(item.isWrong).toBeFalsy();
    });

    it('Should handle unlock', () => {
      const item = new SudokuItem(5, true, 1);
      expect(item.isWrong).toBeTruthy();
      item.unlock();
      expect(item.isWrong).toBeTruthy();
    });
  });

  describe('Should verify state changes for editing state', () => {
    it('Should handle setValue', () => {
      const item = new SudokuItem(5, false);
      expect(item.value).toBe(5);
      item.setValue(9);
      expect(item.value).toBe(9);
    });

    it('Should handle lock', () => {
      const item = new SudokuItem(5, false);
      expect(item.isWrong).toBeFalsy();
      item.lock();
      expect(item.isWrong).toBeTruthy();
    });

    it('Should handle unlock', () => {
      const item = new SudokuItem(5, false, 1);
      expect(item.isWrong).toBeTruthy();
      item.unlock();
      expect(item.isWrong).toBeFalsy();
    });
  });
});
