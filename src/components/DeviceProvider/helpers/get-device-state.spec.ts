import { describe, it, expect } from 'vitest';

import { getDeviceState } from './get-device-state';

describe('get-device-state', () => {
  it('Should confirm that the device is mobile S', () => {
    global.innerWidth = 300;
    expect(getDeviceState()).toStrictEqual({
      isMobileS: true,
      isMobileM: false,
      isMobileL: false,
      isMobile: true,
      isTablet: false,
      isLaptop: false,
      isLaptopL: false,
      isLaptop4K: false,
    });
  });

  it('Should confirm that the device is mobile M', () => {
    global.innerWidth = 350;
    expect(getDeviceState()).toStrictEqual({
      isMobileS: false,
      isMobileM: true,
      isMobileL: false,
      isMobile: true,
      isTablet: false,
      isLaptop: false,
      isLaptopL: false,
      isLaptop4K: false,
    });
  });

  it('Should confirm that the device is mobile L', () => {
    global.innerWidth = 400;
    expect(getDeviceState()).toStrictEqual({
      isMobileS: false,
      isMobileM: false,
      isMobileL: true,
      isMobile: true,
      isTablet: false,
      isLaptop: false,
      isLaptopL: false,
      isLaptop4K: false,
    });
  });

  it('Should confirm that the device is tablet', () => {
    global.innerWidth = 700;
    expect(getDeviceState()).toStrictEqual({
      isMobileS: false,
      isMobileM: false,
      isMobileL: false,
      isMobile: false,
      isTablet: true,
      isLaptop: false,
      isLaptopL: false,
      isLaptop4K: false,
    });
  });

  it('Should confirm that the device is laptop', () => {
    global.innerWidth = 1000;
    expect(getDeviceState()).toStrictEqual({
      isMobileS: false,
      isMobileM: false,
      isMobileL: false,
      isMobile: false,
      isTablet: false,
      isLaptop: true,
      isLaptopL: false,
      isLaptop4K: false,
    });
  });

  it('Should confirm that the device is laptop L', () => {
    global.innerWidth = 1300;
    expect(getDeviceState()).toStrictEqual({
      isMobileS: false,
      isMobileM: false,
      isMobileL: false,
      isMobile: false,
      isTablet: false,
      isLaptop: true,
      isLaptopL: true,
      isLaptop4K: false,
    });
  });

  it('Should confirm that the device is 4K', () => {
    global.innerWidth = 2700;
    expect(getDeviceState()).toStrictEqual({
      isMobileS: false,
      isMobileM: false,
      isMobileL: false,
      isMobile: false,
      isTablet: false,
      isLaptop: true,
      isLaptopL: false,
      isLaptop4K: true,
    });
  });
});
