import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { validateRequiredValue } from './validateRequiredValue';

describe('validateRequiredValue', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should return true if value is not empty', () => {
    expect(validateRequiredValue('Not empty value')).toBeTruthy();
  });

  it.each`
    value
    ${null}
    ${undefined}
    ${''}
  `('Should return false for empty value', ({ value }) => {
    expect(validateRequiredValue(value)).toBeFalsy();
  });
});
