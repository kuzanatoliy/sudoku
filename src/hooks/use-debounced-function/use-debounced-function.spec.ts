import { renderHook as render } from '@solidjs/testing-library';
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vitest,
} from 'vitest';

import { useDebouncedFunction } from './use-debounced-function';

describe('useDebouncedFunction', () => {
  beforeAll(() => {
    vitest.useFakeTimers();
  });

  afterAll(() => {
    vitest.useRealTimers();
  });

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  const fnSpy = vitest.fn();

  const renderHook = (func = fnSpy, delay?: number) =>
    render(() => useDebouncedFunction(func, delay));

  it('Should call debounced function once', () => {
    const { result } = renderHook(fnSpy);
    expect(fnSpy).not.toHaveBeenCalled();
    result();
    result();
    vitest.runAllTimers();
    expect(fnSpy).toHaveBeenCalledTimes(1);
  });
});
