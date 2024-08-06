import { renderHook } from '@solidjs/testing-library';
import { describe, it, expect, beforeEach, vitest } from 'vitest';

import { useDeviceState } from './use-device-state';

describe('use-device-state', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render hook', () => {
    global.innerWidth = 1000;
    const { result } = renderHook(() => useDeviceState());
    expect(result()).toStrictEqual({
      isLaptop: true,
      isLaptop4K: false,
      isLaptopL: false,
      isMobile: false,
      isMobileL: false,
      isMobileM: false,
      isMobileS: false,
      isTablet: false,
    });
  });

  it('Should handle resize', () => {
    global.innerWidth = 1000;
    const { result } = renderHook(() => useDeviceState());
    expect(result().isLaptop).toBeTruthy();
    expect(result().isTablet).toBeFalsy();
    expect(result().isMobile).toBeFalsy();
    global.innerWidth = 900;
    global.dispatchEvent(new Event('resize'));
    expect(result().isLaptop).toBeTruthy();
    expect(result().isTablet).toBeFalsy();
    expect(result().isMobile).toBeFalsy();
    global.innerWidth = 600;
    global.dispatchEvent(new Event('resize'));
    expect(result().isLaptop).toBeFalsy();
    expect(result().isTablet).toBeTruthy();
    expect(result().isMobile).toBeFalsy();
  });
});
