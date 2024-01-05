import { EBreakpoints, TDeviceState } from '../types';

export const getDeviceState: () => TDeviceState = () => ({
  isMobileS: window.innerWidth <= EBreakpoints.MOBILE_S,
  isMobileM:
    window.innerWidth > EBreakpoints.MOBILE_S &&
    window.innerWidth <= EBreakpoints.MOBILE_M,
  isMobileL:
    window.innerWidth > EBreakpoints.MOBILE_M &&
    window.innerWidth <= EBreakpoints.MOBILE_L,
  isMobile: window.innerWidth <= EBreakpoints.MOBILE_L,
  isTablet:
    window.innerWidth > EBreakpoints.MOBILE_L &&
    window.innerWidth <= EBreakpoints.TABLET,
  isLaptop: window.innerWidth > EBreakpoints.LAPTOP,
  isLaptopL:
    window.innerWidth > EBreakpoints.LAPTOP_L &&
    window.innerWidth <= EBreakpoints.LAPTOP_4K,
  isLaptop4K: window.innerWidth > EBreakpoints.LAPTOP_4K,
});
