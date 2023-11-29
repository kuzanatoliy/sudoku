import { TSudokuItem } from '../types';

const DEFAULT_HANDLER = () => {};

export class SudokuItem implements TSudokuItem {
  #value: TSudokuItem['value'];
  #isReadOnly: TSudokuItem['isReadOnly'];
  #locksCount: number;

  setValue: TSudokuItem['setValue'] = DEFAULT_HANDLER;
  lock: TSudokuItem['lock'] = DEFAULT_HANDLER;
  unlock: TSudokuItem['unlock'] = DEFAULT_HANDLER;

  constructor(
    value: TSudokuItem['value'],
    isReadOnly = value !== 0,
    locksCount = 0
  ) {
    this.#value = value;
    this.#isReadOnly = isReadOnly;
    this.#locksCount = locksCount;
    if (!this.#isReadOnly) {
      this.setValue = (value) => {
        this.#value = value;
      };
      this.lock = () => {
        this.#locksCount++;
      };
      this.unlock = () => {
        if (this.#locksCount > 0) {
          this.#locksCount--;
        }
      };
    }
  }

  get value() {
    return this.#value;
  }

  get isReadOnly() {
    return this.#isReadOnly;
  }

  get isWrong() {
    return this.#locksCount > 0;
  }

  getState() {
    return Object.freeze({
      value: this.value,
      isReadOnly: this.#isReadOnly,
      isWrong: this.isWrong,
    });
  }
}
