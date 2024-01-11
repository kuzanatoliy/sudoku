export type TTimer = {
  run: () => TTimer;
  stop: () => TTimer;
  reset: () => TTimer;
};

export type TSubscription = () => void;

export type TObserver = {
  subscribe: (subscription: TSubscription) => void;
  unsubscribe: (subscription: TSubscription) => void;
};
