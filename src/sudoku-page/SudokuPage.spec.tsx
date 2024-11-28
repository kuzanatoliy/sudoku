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
import { useQuery } from 'query';

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

vitest.mock('query', async () => {
  const origin = await vitest.importActual<typeof import('query')>('query');
  return {
    ...origin,
    useQuery: vitest.fn(),
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
  const MOCK_DATA = [
    {
      complexity: 5,
      play: [
        0, 0, 0, 4, 0, 0, 0, 0, 6, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 5,
        0, 8, 2, 0, 0, 0, 7, 9, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 2, 3, 0, 0, 1, 0,
        0, 0, 0, 0, 0, 7, 7, 0, 3, 0, 0, 1, 0, 0, 4, 5, 0, 0, 0, 0, 7, 0, 1, 0,
        0, 4, 1, 0, 0, 3, 6, 0, 5,
      ],
      result: [
        2, 3, 7, 4, 8, 9, 1, 5, 6, 6, 8, 5, 1, 7, 2, 3, 4, 6, 1, 9, 4, 3, 6, 5,
        7, 8, 2, 3, 5, 2, 4, 9, 8, 4, 6, 1, 9, 7, 6, 5, 1, 4, 2, 3, 8, 4, 1, 8,
        2, 3, 6, 5, 9, 7, 7, 6, 3, 8, 5, 1, 9, 2, 4, 5, 2, 8, 6, 4, 7, 8, 1, 3,
        8, 4, 1, 9, 2, 3, 6, 7, 5,
      ],
    },
  ];

  const runQuerySpy = vitest.fn();

  const renderComponent = ({
    isMobile = false,
    isTablet = false,
    isLoading = false,
  } = {}) => {
    vitest
      .mocked(useDeviceContext)
      .mockImplementation(
        () =>
          (() => ({ isMobile, isTablet })) as unknown as ReturnType<
            typeof useDeviceContext
          >
      );
    vitest.mocked(useQuery).mockImplementation(() => ({
      state: vitest.fn().mockReturnValue({
        isLoading,
        isStarted: false,
        isValid: true,
        isError: false,
        data: MOCK_DATA,
      }),
      runQuery: runQuerySpy,
    }));
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
    expect(runQuerySpy).toBeCalled();
  });

  it('Should render loading state', () => {
    renderComponent({ isLoading: true });
    expect(DurationWrapper).not.toBeCalled();
    expect(SudokuPlay).not.toBeCalled();
    expect(runQuerySpy).toBeCalled();
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
