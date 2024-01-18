import { SudokuItem } from '../SudokuItem';
import { isEffectedItem } from '../helpers';
import {
  TSudokuBattle,
  TSudokuItem,
  TSudokuValue,
  ESudokuBunchOperations,
} from '../types';

export class SudokuBattle implements TSudokuBattle {
  #battleItems: TSudokuItem[];

  constructor(battleMap: TSudokuValue[]) {
    this.#battleItems = battleMap.map((item) => new SudokuItem(item));
  }

  #bunchOperation = (
    battleItems: TSudokuItem[],
    index: number,
    operation: ESudokuBunchOperations
  ) => {
    for (let i = 0; i < battleItems.length; i++) {
      if (
        i !== index &&
        isEffectedItem(i, index) &&
        battleItems[i].value === battleItems[index].value
      ) {
        battleItems[i][operation]();
        battleItems[index][operation]();
      }
    }
  };

  setValue(index: number, value: TSudokuValue) {
    if (this.#battleItems[index].value !== 0) {
      this.#bunchOperation(
        this.#battleItems,
        index,
        ESudokuBunchOperations.UNLOCK
      );
    }
    this.#battleItems[index].setValue(value);
    if (value !== 0) {
      this.#bunchOperation(
        this.#battleItems,
        index,
        ESudokuBunchOperations.LOCK
      );
    }
  }

  isCompleted() {
    return this.#battleItems.every((item) => item.value > 0 && !item.isWrong);
  }

  getState() {
    return this.#battleItems.map((item) => item.getState());
  }
}
