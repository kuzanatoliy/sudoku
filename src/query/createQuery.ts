import { createSignal } from 'solid-js';

export const createQuery = (url: string, options: { method: string }) => {
  const [state, setState] = createSignal({
    isLoading: false,
    isStarted: false,
    isValid: true,
    isError: false,
    data: {},
  });

  const runQuery = () => {
    setState((prev) => ({ ...prev, isStarted: true, isLoading: true }));
    fetch(url, options)
      .then((resp: Response) => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error(`${url}:${options?.method} - cannot be fetched`);
      })
      .then((data) => {
        setState((prev) => ({ ...prev, data, isValid: true, isError: false }));
      })
      .catch((error) => {
        console.error(error);
        setState((prev) => ({ ...prev, isError: true, isValid: false }));
      })
      .finally(() => {
        setState((prev) => ({ ...prev, isLoading: false }));
      });
  };

  return { state, runQuery };
};
