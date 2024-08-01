import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { validateWord } from './validateWord';

describe('validateWord', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should return true for one word', () => {
    expect(validateWord('Book')).toBeTruthy();
  });

  it('Should return false for a few words', () => {
    expect(validateWord('The book was exelent')).toBeFalsy();
  });

  it('Should return false for a number', () => {
    expect(validateWord('111')).toBeFalsy();
  });
});
