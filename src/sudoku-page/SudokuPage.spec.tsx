import { render } from '@solidjs/testing-library';
import {
  beforeEach,
  beforeAll,
  afterAll,
  describe,
  expect,
  it,
  vitest,
} from 'vitest';

import { useDeviceContext } from 'components';

import { DurationWrapper } from './DurationWrapper';
import { SudokuPlay } from './SudokuPlay';
import { SudokuPage } from './SudokuPage';
import { ESudokuFieldSize } from './types';

vitest.mock('components', async () => {
  const origin =
    await vitest.importActual<typeof import('components')>('components');
  return {
    ...origin,
    useDeviceContext: vitest
      .fn()
      .mockImplementation(() => () => ({ isMobile: false, isTablet: false })),
  };
});

vitest.mock('./DurationWrapper', async () => {
  const origin =
    await vitest.importActual<typeof import('./DurationWrapper')>(
      './DurationWrapper'
    );
  return {
    ...origin,
    DurationWrapper: vitest
      .fn()
      .mockImplementation((props) => <div>{JSON.stringify(props)}</div>),
  };
});

vitest.mock('./SudokuPlay', async () => {
  const origin =
    await vitest.importActual<typeof import('./SudokuPlay')>('./SudokuPlay');
  return {
    ...origin,
    SudokuPlay: vitest
      .fn()
      .mockImplementation((props) => <div>{JSON.stringify(props)}</div>),
  };
});

describe.skip('SudokuPage', () => {
  const renderComponent = ({ isMobile = false, isTablet = false } = {}) => {
    vitest
      .mocked(useDeviceContext)
      .mockImplementation(
        () =>
          (() => ({ isMobile, isTablet })) as unknown as ReturnType<
            typeof useDeviceContext
          >
      );
    return render(() => <SudokuPage />);
  };

  beforeAll(() => {
    vitest.useFakeTimers();
  });

  afterAll(() => {
    vitest.useRealTimers();
  });

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(DurationWrapper).toBeCalled();
    expect(SudokuPlay).toBeCalled();
  });

  it.each`
    isMobile | isTablet | size
    ${true}  | ${false} | ${ESudokuFieldSize.MIDDLE}
    ${false} | ${true}  | ${ESudokuFieldSize.MIDDLE}
    ${false} | ${false} | ${ESudokuFieldSize.LARGE}
  `(
    'Should render component with different sudoku play variants',
    ({ isMobile, isTablet, size }) => {
      renderComponent({ isMobile, isTablet });
      expect(SudokuPlay).lastCalledWith(expect.objectContaining({ size }));
    }
  );
});
