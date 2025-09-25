import { onCleanup } from 'solid-js';

export const DEFAULT_DEBOUNCED_FUNCTION_DELAY = 1000;

export const useDebouncedFunction = (
  func: (...args: unknown[]) => void,
  delay: number = DEFAULT_DEBOUNCED_FUNCTION_DELAY
) => {
  let timerId: NodeJS.Timeout | undefined = undefined;

  onCleanup(() => {
    clearTimeout(timerId);
  });

  return (...args: Parameters<typeof func>) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
