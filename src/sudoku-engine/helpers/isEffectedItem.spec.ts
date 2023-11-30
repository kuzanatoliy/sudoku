import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { isEffectedItem } from './isEffectedItem';

describe('isEffectedItem', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it.each`
    index | activeIndex
    ${37} | ${41}
    ${4}  | ${7}
    ${78} | ${73}
    ${5}  | ${41}
    ${52} | ${7}
    ${19} | ${73}
    ${48} | ${41}
    ${17} | ${7}
    ${54} | ${73}
  `('Should be true if index is effected', ({ index, activeIndex }) => {
    expect(isEffectedItem(index, activeIndex)).toBeTruthy();
  });

  it.each`
    index | activeIndex
    ${2}  | ${41}
    ${46} | ${7}
    ${43} | ${73}
  `('Should be false if index is not effected', ({ index, activeIndex }) => {
    expect(isEffectedItem(index, activeIndex)).toBeFalsy();
  });
});
