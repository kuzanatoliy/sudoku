import { onMount, onCleanup, createSignal } from 'solid-js';

import { getDeviceState } from '../helpers';

export const useDeviceState = () => {
  const [state, setState] = createSignal(getDeviceState());

  const handler = () => {
    const newState = getDeviceState();
    const oldState = state();

    if (
      oldState.isMobileS !== newState.isMobileS ||
      oldState.isMobileM !== newState.isMobileM ||
      oldState.isMobileL !== newState.isMobileL ||
      oldState.isTablet !== newState.isTablet ||
      oldState.isLaptop !== newState.isLaptop ||
      oldState.isLaptopL !== newState.isLaptopL ||
      oldState.isLaptop4K !== newState.isLaptop4K
    ) {
      setState(newState);
    }
  };

  onMount(() => {
    window.addEventListener('resize', handler);
  });

  onCleanup(() => {
    window.removeEventListener('resize', handler);
  });

  return state;
};
