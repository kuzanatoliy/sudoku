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

  const renderHook = () =>
    render(() =>
      useQuery<Array<unknown>>('/test', DEFAULT_DATA, { method: 'GET' })
    );

  it('Should verify valid workflow', async () => {
    vitest.mocked(globalThis.fetch).mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(['test1', 'test2']),
      }) as unknown as ReturnType<typeof globalThis.fetch>;
    });

    const { result } = renderHook();
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
  });

  it('Should verify invalid workflow', async () => {
    vitest.mocked(globalThis.fetch).mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      }) as unknown as ReturnType<typeof globalThis.fetch>;
    });

    const { result } = renderHook();
    expect(result.state().isLoading).toBeFalsy();
    expect(result.state().isError).toBeFalsy();
    await result.runQuery();
    expect(result.state().isLoading).toBeFalsy();
    expect(result.state().isError).toBeTruthy();
  });
});
