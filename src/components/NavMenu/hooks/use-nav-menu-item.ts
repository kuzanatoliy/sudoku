import { onCleanup, onMount } from 'solid-js';
import { useNavMenuContext } from './use-nav-menu-context';

export const useNavMenuItem = (key: string, ref: HTMLElement) => {
  const { state, subscribe, unsubscribe } = useNavMenuContext();

  onMount(() => {
    if (ref) {
      subscribe(key, ref);
    }
  });

  onCleanup(() => {
    unsubscribe(key);
  });

  return state;
};
