import { SECOND, MINUTE, HOUR } from '../constants';
import { TCustomTime } from '../types';

export class CustomTime implements TCustomTime {
  #seconds: number;
  #minutes: number;
  #hours: number;

  constructor(time: number) {
    this.#hours = Math.trunc(time / HOUR);
    this.#minutes = Math.trunc((time % HOUR) / MINUTE);
    this.#seconds = Math.trunc((time % MINUTE) / SECOND);
  }

  get seconds() {
    return this.#seconds;
  }

  get minutes() {
    return this.#minutes;
  }

  get hours() {
    return this.#hours;
  }
}
