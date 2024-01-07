import { renderHook } from '@solidjs/testing-library';
import { describe, it, expect } from 'vitest';

import { DeviceProvider } from '../DeviceProvider';
import { useDeviceContext } from '.';

describe('use-device-context', () => {
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
