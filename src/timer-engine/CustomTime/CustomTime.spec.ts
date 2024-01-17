import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { CustomTime } from './CustomTime';

describe('CustomTime', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it.each`
    time       | seconds | minutes | hours
    ${2345}    | ${2}    | ${0}    | ${0}
    ${135786}  | ${15}   | ${2}    | ${0}
    ${4000000} | ${40}   | ${6}    | ${1}
  `('Should verify values for $time', ({ time, seconds, minutes, hours }) => {
    const customTime = new CustomTime(time);
    expect(customTime.seconds).toBe(seconds);
    expect(customTime.minutes).toBe(minutes);
    expect(customTime.hours).toBe(hours);
  });
});
