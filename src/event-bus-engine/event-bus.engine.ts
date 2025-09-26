export class EventBus {
  private store: Record<string, Array<(...arguments_: unknown[]) => void>>;

  constructor() {
    this.store = {};
  }

  public subscribe = (
    eventName: string,
    callback: (...arguments_: unknown[]) => void
  ) => {
    if (this.store[eventName]) {
      this.store[eventName].push(callback);
    } else {
      this.store[eventName] = [callback];
    }
  };

  public unsubscribe = (
    eventName: string,
    callback: (...arguments_: unknown[]) => void
  ) => {
    if (this.store[eventName]) {
      this.store[eventName] = this.store[eventName].filter(
        (item) => item !== callback
      );
    }
  };

  public trigger = (eventName: string, ...arguments_: unknown[]) => {
    if (this.store[eventName]) {
      for (const callback of this.store[eventName]) callback(...arguments_);
    }
  };
}
