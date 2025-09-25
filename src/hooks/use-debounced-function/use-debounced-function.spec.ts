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

describe('useLeavingConfirmation', () => {
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

  const renderHook = (funk = fnSpy, delay?: number) =>
    render(() => useDebouncedFunction(funk, delay));

  it('Should not call confirmation', () => {
    const { result } = renderHook(fnSpy);
    expect(fnSpy).not.toHaveBeenCalled();
    result();
    result();
    vitest.runAllTimers();
    expect(fnSpy).toHaveBeenCalledTimes(1);
  });
});
