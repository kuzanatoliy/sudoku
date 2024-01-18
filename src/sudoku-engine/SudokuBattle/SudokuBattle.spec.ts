import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { SudokuBattle } from './SudokuBattle';
import { TSudokuValue } from '../types';

describe('SudokuBattle', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  const BATTLE_MAP: TSudokuValue[] = [
    1, 2, 0, 5, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 9, 2, 0, 3, 0, 0, 0, 0, 0, 1,
    0, 0, 9, 0, 0, 4, 0, 0, 0, 5, 6, 7, 0, 0, 9, 0, 0, 0, 0, 0, 4, 0, 2, 0, 6,
    0, 0, 0, 0, 5, 0, 3, 2, 0, 9, 6, 4, 0, 0, 0, 0, 6, 0, 0, 0, 3, 0, 2, 7, 0,
    0, 0, 3, 0, 0, 0,
  ];

  const COMPLETED_BATTLE_MAP: TSudokuValue[] = [
    1, 2, 8, 5, 9, 4, 3, 6, 7, 6, 4, 7, 3, 1, 8, 9, 2, 5, 3, 5, 9, 7, 2, 6, 1,
    8, 4, 9, 3, 1, 4, 8, 7, 2, 5, 6, 7, 6, 5, 9, 3, 2, 4, 7, 1, 4, 7, 2, 1, 6,
    5, 8, 9, 3, 5, 1, 3, 2, 7, 9, 6, 4, 8, 8, 9, 4, 6, 5, 1, 7, 3, 2, 2, 7, 6,
    8, 4, 3, 5, 1, 9,
  ];

  it('Should verify initial state', () => {
    const battle = new SudokuBattle(BATTLE_MAP);
    battle.getState().forEach((item) =>
      expect(item).toStrictEqual({
        value: item.value,
        isReadOnly: item.value > 0,
        isWrong: false,
      })
    );
  });

  it('Should not be completed', () => {
    const battle = new SudokuBattle(BATTLE_MAP);
    expect(battle.isCompleted()).toBeFalsy();
  });

  it('Should be completed', () => {
    const battle = new SudokuBattle(COMPLETED_BATTLE_MAP);
    expect(battle.isCompleted()).toBeTruthy();
  });

  it('Should verify incorrect workflow', () => {
    const battle = new SudokuBattle(BATTLE_MAP);
    expect(battle.getState()[2].isWrong).toBeFalsy();
    battle.setValue(2, 1);
    expect(battle.getState()[2].isWrong).toBeTruthy();
    battle.setValue(2, 0);
    expect(battle.getState()[2].isWrong).toBeFalsy();
  });

  it('Should verify correct workflow', () => {
    const battle = new SudokuBattle(BATTLE_MAP);
    expect(battle.getState()[2].value).toBe(0);
    expect(battle.getState()[2].isWrong).toBeFalsy();
    battle.setValue(2, 8);
    expect(battle.getState()[2].value).toBe(8);
    expect(battle.getState()[2].isWrong).toBeFalsy();
  });
});
