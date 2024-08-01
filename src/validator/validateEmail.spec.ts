import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { validateEmail } from './validateEmail';

describe('validateEmail', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should return true for correct email', () => {
    expect(validateEmail('example.email@gmail.com')).toBeTruthy();
  });

  it('Should return false for incorrect email', () => {
    expect(validateEmail('example.email')).toBeFalsy();
  });
});
