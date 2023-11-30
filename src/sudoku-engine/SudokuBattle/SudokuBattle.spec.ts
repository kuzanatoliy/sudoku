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
