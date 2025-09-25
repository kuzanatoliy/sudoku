import {
  onCleanup,
  createSignal,
  createEffect,
  Accessor,
  onMount,
} from 'solid-js';

export const DEFAULT_DEBOUNCED_VALUE_DELAY = 1000;

export const useDebouncedValue = (
  value: Accessor<unknown>,
  delay: number = DEFAULT_DEBOUNCED_VALUE_DELAY
) => {
  const [currValue, setCurrValue] = createSignal<unknown>();
  let timerId: NodeJS.Timeout | undefined = undefined;

  onMount(() => {
    setCurrValue(value());
  });

  onCleanup(() => {
    clearTimeout(timerId);
  });

  createEffect(() => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      setCurrValue(value());
    }, delay);
  });

  return currValue;
};
