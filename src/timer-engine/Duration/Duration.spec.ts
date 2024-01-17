import {
  beforeEach,
  beforeAll,
  afterAll,
  describe,
  expect,
  it,
  vitest,
} from 'vitest';

import { Duration } from './Duration';

describe('Duration', () => {
  beforeAll(() => {
    vitest.useFakeTimers();
  });

  afterAll(() => {
    vitest.useRealTimers();
  });

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should verify duration run', () => {
    const duration = new Duration();
    const spy = vitest.fn();
    duration.subscribe(spy);
    duration.run();
    expect(spy).not.toBeCalled();
    vitest.runOnlyPendingTimers();
    expect(spy).toBeCalled();
  });

  it('Should verify duration stop', () => {
    const duration = new Duration();
    const spy = vitest.fn();
    duration.subscribe(spy);
    duration.run();
    expect(spy).not.toBeCalled();
    duration.stop();
    vitest.runOnlyPendingTimers();
    expect(spy).not.toBeCalled();
  });

  it('Should verify subscription', () => {
    const duration = new Duration();
    const spy = vitest.fn();
    duration.subscribe(spy);
    duration.run();
    duration.unsubscribe(spy);
    vitest.runOnlyPendingTimers();
    expect(spy).not.toBeCalled();
  });

  it('Should verify duration reset', () => {
    const duration = new Duration();
    const spy = vitest.fn();
    duration.subscribe(spy);
    duration.run();
    duration.reset();
    expect(spy).not.toBeCalled();
    vitest.runOnlyPendingTimers();
    expect(spy).toBeCalled();
  });

  /*it.each`
    time       | seconds | minutes | hours
    ${2345}    | ${2}    | ${0}    | ${0}
    ${135786}  | ${15}   | ${2}    | ${0}
    ${4000000} | ${40}   | ${6}    | ${1}
  `('Should verify values for $time', ({ time, seconds, minutes, hours }) => {
    const Duration = new Duration(time);
    expect(Duration.seconds).toBe(seconds);
    expect(Duration.minutes).toBe(minutes);
    expect(Duration.hours).toBe(hours);
  });*/
});
