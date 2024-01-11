import { TTimer, TObserver, TSubscription } from '../types';

const TICK = 1000;

export class Duration implements TTimer, TObserver {
  #startTime: number = 0;
  #currentTime: number = 0;
  #timerId?: NodeJS.Timeout;
  #subscriptions: Array<() => void> = [];

  #runTimer() {
    return setTimeout(() => {
      this.#currentTime = Date.now();
      this.#timerId = this.#runTimer();
    }, TICK);
  }

  run() {
    this.#startTime = Date.now() - (this.#currentTime - this.#startTime);
    this.#timerId = this.#runTimer();
    return this;
  }

  stop() {
    this.#currentTime = Date.now();
    clearTimeout(this.#timerId);
    return this;
  }

  reset() {
    this.#startTime = 0;
    this.#currentTime = 0;
    return this;
  }

  subscribe(subscription: TSubscription) {
    this.#subscriptions.push(subscription);
  }

  unsubscribe(subscription: TSubscription) {
    this.#subscriptions.filter((item) => item === subscription);
  }
}
