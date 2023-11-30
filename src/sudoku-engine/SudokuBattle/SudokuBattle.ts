import { SudokuItem } from '../SudokuItem';
import { isEffectedItem } from '../helpers/isEffectedItem';
import { TSudokuItem, TSudokuValue } from '../types';

export class SudokuBattle {
  #battleItems: TSudokuItem[];

  constructor(battleMap: TSudokuValue[]) {
    this.#battleItems = battleMap.map((item) => new SudokuItem(item));
  }

  setValue(index: number, value: TSudokuValue) {
    if (this.#battleItems[index].value !== 0) {
      for (let i = 0; i < this.#battleItems.length; i++) {
        if (
          i !== index &&
          isEffectedItem(i, index) &&
          this.#battleItems[i].value === this.#battleItems[index].value
        ) {
          this.#battleItems[i].unlock();
          this.#battleItems[index].unlock();
        }
      }
    }
    this.#battleItems[index].setValue(value);
    if (value !== 0) {
      for (let i = 0; i < this.#battleItems.length; i++) {
        if (
          i !== index &&
          isEffectedItem(i, index) &&
          this.#battleItems[i].value === this.#battleItems[index].value
        ) {
          this.#battleItems[i].lock();
          this.#battleItems[index].lock();
        }
      }
    }
  }

  getState() {
    return this.#battleItems.map((item) => item.getState());
  }
}
