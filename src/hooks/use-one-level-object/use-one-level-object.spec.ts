import { renderHook as render } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { TUseOneLevelObject, useOneLevelObject } from './use-one-level-object';

describe('useOneLevelObject', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  const renderHook = (props: TUseOneLevelObject) =>
    render(() => useOneLevelObject(props));

  it.each`
    object
    ${null}
    ${undefined}
    ${110}
    ${'test'}
  `('Should return the same value with premitives', ({ object }) => {
    const { result } = renderHook({ object });
    expect(result()).toBe(object);
  });

  it.each`
    object                                                          | resultObject
    ${{}}                                                           | ${{}}
    ${{ test1: 'test1', test2: 'test2', deep: { test3: 'test3' } }} | ${{ test1: 'test1', test2: 'test2', 'deep.test3': 'test3' }}
    ${['test1', 'test2', ['test3', 'test4']]}                       | ${{ 0: 'test1', 1: 'test2', '2.0': 'test3', '2.1': 'test4' }}
  `(
    'Should transform object to one level object',
    ({
      object,
      resultObject,
    }: TUseOneLevelObject & { resultObject: object }) => {
      const { result } = renderHook({ object });
      expect(result()).toStrictEqual(resultObject);
    }
  );
});
