import { renderHook } from '@solidjs/testing-library';
import { describe, it, expect, vitest, beforeEach } from 'vitest';

import { DeviceProvider } from '../DeviceProvider';
import { useDeviceContext } from './use-device-context';

describe('use-device-context', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render hook', () => {
    const { result } = renderHook(() => useDeviceContext(), {
      wrapper: DeviceProvider,
    });
    expect(!!result).toBeTruthy();
  });

  it('Should render hook with errors', () => {
    const { result } = renderHook(() => useDeviceContext());
    try {
      result();
      expect(true).toBeFalsy();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
