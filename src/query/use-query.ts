import { createSignal } from 'solid-js';

export type TQueryState<TData> = {
  isLoading: boolean;
  isStarted: boolean;
  isValid: boolean;
  isError: boolean;
  data: TData;
};

export type TQueryOptions = {
  method?: string;
  body?: object;
  headers?: Record<string, string>;
};

export const useQuery = <TData>(
  url: string,
  initData: TData,
  initOptions: TQueryOptions
) => {
  const [state, setState] = createSignal<TQueryState<TData>>({
    isLoading: false,
    isStarted: false,
    isValid: true,
    isError: false,
    data: initData,
  });

  const runQuery = (options?: TQueryOptions) => {
    const method = options?.method || initOptions?.method;
    setState((prev) => ({ ...prev, isStarted: true, isLoading: true }));
    return fetch(url, {
      method: options?.method || initOptions?.method,
      body:
        method && method !== 'GET' && method !== 'HEAD'
          ? new URLSearchParams({ ...initOptions.body, ...options?.body })
          : undefined,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...initOptions.headers,
        ...options?.headers,
      },
    })
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
