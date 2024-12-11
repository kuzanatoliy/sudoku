import { /*onMount, onCleanup,*/ createSignal } from 'solid-js';

import { TNavMenuState, TNavMenuStateItem } from '../types';

export const useNavMenuState: () => TNavMenuState = () => {
  const [state, setState] = createSignal<TNavMenuStateItem[]>([]);

  const subscribe = (key: string, ref: HTMLElement) =>
    setState([...state(), { key, ref }]);

  const unsubscribe = (key: string) =>
    setState(state().filter((item) => item.key === key));

  return {
    state,
    subscribe,
    unsubscribe,
  };
};
