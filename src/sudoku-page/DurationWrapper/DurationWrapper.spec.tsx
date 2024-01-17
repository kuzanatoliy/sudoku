import { render, screen } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { CustomTime } from 'timer-engine';

import { DurationWrapper } from './DurationWrapper';

describe('DurationWrapper', () => {
  const renderComponent = ({ time = 0 }: { time?: number } = {}) =>
    render(() => <DurationWrapper time={new CustomTime(time)} />);

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it.each`
    time       | result
    ${2345}    | ${'0:00:02'}
    ${135786}  | ${'0:02:15'}
    ${4000000} | ${'1:06:40'}
  `('Should render component with $time', ({ time, result }) => {
    renderComponent(time);
    expect(screen.queryByText(result)).toBeDefined();
  });
});
