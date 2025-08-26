import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { turnObjectToOneLevel } from './turn-object-to-one-level';

describe('turnObjectToOneLevel', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it.each`
    props
    ${null}
    ${undefined}
    ${110}
    ${'test'}
  `(
    'Should return the same value with premitives',
    ({ props }: Record<string, unknown>) => {
      const result = turnObjectToOneLevel(props);
      expect(result).toBe(props);
    }
  );

  it.each`
    props                                                           | value
    ${{}}                                                           | ${{}}
    ${{ test1: 'test1', test2: 'test2', deep: { test3: 'test3' } }} | ${{ test1: 'test1', test2: 'test2', 'deep.test3': 'test3' }}
    ${['test1', 'test2', ['test3', 'test4']]}                       | ${{ 0: 'test1', 1: 'test2', '2.0': 'test3', '2.1': 'test4' }}
  `(
    'Should transform object to one level object',
    ({ props, value }: Record<string, unknown>) => {
      const result = turnObjectToOneLevel(props);
      expect(result).toStrictEqual(value);
    }
  );
});
