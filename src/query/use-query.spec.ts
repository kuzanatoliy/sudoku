import { renderHook as render } from '@solidjs/testing-library';
import {
  describe,
  it,
  vitest,
  expect,
  beforeAll,
  beforeEach,
  afterAll,
} from 'vitest';

import { useQuery } from './use-query';

describe('useQuery', () => {
  let originalFetch: typeof globalThis.fetch;

  beforeAll(() => {
    originalFetch = globalThis.fetch;
    globalThis.fetch = vitest.fn();
  });

  afterAll(() => {
    globalThis.fetch = originalFetch;
  });

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  const DEFAULT_DATA: unknown[] = [];

  const renderHook = (method?: string) =>
    render(() => useQuery<Array<unknown>>('/test', DEFAULT_DATA, { method }));

  it.each`
    method
    ${undefined}
    ${'GET'}
    ${'POST'}
  `(
    'Should verify valid workflow for the method $method',
    async ({ method }) => {
      vitest.mocked(globalThis.fetch).mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(['test1', 'test2']),
        }) as unknown as ReturnType<typeof globalThis.fetch>;
      });

      const { result } = renderHook(method);
      expect(result.state().isLoading).toBeFalsy();
      expect(result.state().isStarted).toBeFalsy();
      const promise = result.runQuery();
      expect(result.state().isLoading).toBeTruthy();
      expect(result.state().isStarted).toBeTruthy();
      await promise;
      expect(result.state().isLoading).toBeFalsy();
      expect(result.state().isStarted).toBeTruthy();
      expect(result.state().isValid).toBeTruthy();
      expect(result.state().isError).toBeFalsy();
      expect(result.state().data).toStrictEqual(['test1', 'test2']);
    }
  );

  it.each`
    method
    ${undefined}
    ${'GET'}
    ${'POST'}
  `(
    'Should verify invalid workflow for the method $method',
    async ({ method }) => {
      vitest.mocked(globalThis.fetch).mockImplementation(() => {
        return Promise.resolve({
          ok: false,
        }) as unknown as ReturnType<typeof globalThis.fetch>;
      });

      const { result } = renderHook(method);
      expect(result.state().isLoading).toBeFalsy();
      expect(result.state().isError).toBeFalsy();
      await result.runQuery();
      expect(result.state().isLoading).toBeFalsy();
      expect(result.state().isError).toBeTruthy();
    }
  );

  it('Should override method', async () => {
    vitest.mocked(globalThis.fetch).mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(['test1', 'test2']),
      }) as unknown as ReturnType<typeof globalThis.fetch>;
    });

    const { result } = renderHook('GET');
    const promise = result.runQuery({ method: 'HEAD', body: {} });
    await promise;
    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        method: 'HEAD',
      })
    );
  });

  it('Should validate post request', async () => {
    vitest.mocked(globalThis.fetch).mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(['test1', 'test2']),
      }) as unknown as ReturnType<typeof globalThis.fetch>;
    });

    const { result } = renderHook('POST');
    const promise = result.runQuery({
      body: {
        test: 'test value',
      },
    });
    await promise;
    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        body: expect.anything(),
      })
    );
  });
});
