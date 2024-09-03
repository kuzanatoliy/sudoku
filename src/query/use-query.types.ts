export const enum EHttpMethod {
  CONNECT = 'CONNECT',
  DELETE = 'DELETE',
  GET = 'GET',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  POST = 'POST',
  PUT = 'PUT',
}

export type TQueryState<TData> = {
  isLoading: boolean;
  isStarted: boolean;
  isValid: boolean;
  isError: boolean;
  data?: TData;
};

export type TQueryOptions = {
  method?: EHttpMethod;
  body?: object;
  headers?: Record<string, string>;
};
