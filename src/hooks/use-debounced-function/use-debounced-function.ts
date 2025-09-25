import { onCleanup } from 'solid-js';

export const useDebouncedFunction = (
  callback: (...args: unknown[]) => void,
  delay: number
) => {
  let timerId: NodeJS.Timeout | undefined = undefined;

  onCleanup(() => {
    clearTimeout(timerId);
  });

  return (...args: Parameters<typeof callback>) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
    return callback();
  };
};
