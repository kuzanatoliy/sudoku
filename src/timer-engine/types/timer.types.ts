import { TCustomTime } from './custom-time.types';

export type TTimer = {
  run: () => TTimer;
  stop: () => TTimer;
  reset: () => TTimer;
};

export type TSubscription = (time: TCustomTime) => void;

export type TObserver = {
  subscribe: (subscription: TSubscription) => void;
  unsubscribe: (subscription: TSubscription) => void;
};
