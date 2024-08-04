import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { createValidator } from './createValidator';

describe('createValidator', () => {
  const rightValidator = vitest.fn().mockReturnValue(true);
  const wrongValidator = vitest.fn().mockReturnValue(false);

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should return error on first validator', () => {
    const validator = createValidator(
      {
        validator: wrongValidator,
        errorMessage: 'Not pass first validator',
      },
      {
        validator: rightValidator,
        errorMessage: 'Not right second validator',
      }
    );
    expect(validator('test')).toStrictEqual({
      isValid: false,
      errorMessage: 'Not pass first validator',
    });
  });

  it('Should return error on secod validator', () => {
    const validator = createValidator(
      {
        validator: rightValidator,
        errorMessage: 'Not pass first validator',
      },
      {
        validator: wrongValidator,
        errorMessage: 'Not pass second validator',
      }
    );
    expect(validator('test')).toStrictEqual({
      isValid: false,
      errorMessage: 'Not pass second validator',
    });
  });

  it('Should be correct', () => {
    const validator = createValidator(
      {
        validator: rightValidator,
        errorMessage: 'Not pass first validator',
      },
      {
        validator: rightValidator,
        errorMessage: 'Not pass second validator',
      }
    );
    expect(validator('test')).toStrictEqual({
      isValid: true,
    });
  });
});
