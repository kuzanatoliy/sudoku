import { SudokuItem } from '../SudokuItem';
import { TSudokuItem, TSudokuValue } from '../types';

export class SudokuBattle {
  #battleItems: TSudokuItem[];

  constructor(battleMap: TSudokuValue[]) {
    this.#battleItems = battleMap.map((item) => new SudokuItem(item));
  }

  getState() {
    return this.#battleItems.map((item) => item.getState());
  }
}
