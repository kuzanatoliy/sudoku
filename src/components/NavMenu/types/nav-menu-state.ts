import { Accessor } from 'solid-js';

export type TNavMenuStateItem = {
  key: string;
  ref: HTMLElement;
};

export type TNavMenuStateSubscribeFn = (key: string, ref: HTMLElement) => void;

export type TNavMenuStateUnsubscribeFn = (key: string) => void;

export type TNavMenuState = {
  state: Accessor<TNavMenuStateItem[]>;
  subscribe: TNavMenuStateSubscribeFn;
  unsubscribe: TNavMenuStateUnsubscribeFn;
};
