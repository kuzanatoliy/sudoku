import { createSignal } from 'solid-js';

export type TQuery<TData> = {
  isLoading: boolean;
  isStarted: boolean;
  isValid: boolean;
  isError: boolean;
  data: TData;
};

export const createQuery = <TData>(
  url: string,
  initData: TData,
  options: { method: string }
) => {
  const [state, setState] = createSignal<TQuery<TData>>({
    isLoading: false,
    isStarted: false,
    isValid: true,
    isError: false,
    data: initData,
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
      .then((data: TData) => {
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
