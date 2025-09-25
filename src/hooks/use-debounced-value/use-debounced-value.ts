import { onCleanup, createSignal, createEffect } from 'solid-js';

export const DEFAULT_DEBOUNCED_VALUE_DELAY = 1000;

export const useDebouncedValue = (
  value: unknown,
  delay: number = DEFAULT_DEBOUNCED_VALUE_DELAY
) => {
  const [currValue, setCurrValue] = createSignal<unknown>(value);
  let timerId: NodeJS.Timeout | undefined = undefined;

  onCleanup(() => {
    clearTimeout(timerId);
  });

  createEffect(() => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      setCurrValue(value);
    }, delay);
  });

  return currValue;
};
