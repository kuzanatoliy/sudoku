import { beforeEach, describe, expect, it, vitest } from 'vitest';

import {
  validateLength,
  validateMinLength,
  validateMaxLength,
} from './validateLength';

describe('validateLength', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should be valid', () => {
    expect(validateLength('example.email@gmail.com', 10, 100)).toBeTruthy();
  });

  it('Should be false if value is less than min', () => {
    expect(validateLength('aaa', 10, 20)).toBeFalsy();
  });

  it('Should be false if value is more than max', () => {
    expect(validateLength('aaa aaa aaa aaa', 1, 10)).toBeFalsy();
  });
});

describe('validateMinLength', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should be valid', () => {
    expect(validateMinLength('example.email@gmail.com', 10)).toBeTruthy();
  });

  it('Should be false if value is less than min', () => {
    expect(validateMinLength('aaa', 10)).toBeFalsy();
  });
});

describe('validateMaxLength', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should be valid', () => {
    expect(validateMaxLength('example.email@gmail.com', 100)).toBeTruthy();
  });

  it('Should be false if value is more than max', () => {
    expect(validateMaxLength('aaa aaa aaa aaa', 10)).toBeFalsy();
  });
});
