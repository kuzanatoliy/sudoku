export type TDeviceStateKey =
  | 'isMobileS'
  | 'isMobileM'
  | 'isMobileL'
  | 'isMobile'
  | 'isTablet'
  | 'isLaptop'
  | 'isLaptopL'
  | 'isLaptop4K';

export type TDeviceState = Record<TDeviceStateKey, boolean>;
