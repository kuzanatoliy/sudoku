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
import { TSudokuPlayData } from 'types';

import { DurationWrapper } from './DurationWrapper';
import { SudokuPlay } from './SudokuPlay';
import { SudokuPage } from './SudokuPage';
import { ESudokuFieldSize } from './types';
import { useNavigate, useParams } from '@solidjs/router';

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

const navigateSpy = vitest.fn();
vitest.mock('@solidjs/router', async () => {
  const origin =
    await vitest.importActual<typeof import('@solidjs/router')>(
      '@solidjs/router'
    );
  return {
    ...origin,
    useNavigate: vitest.fn().mockImplementation(() => navigateSpy),
    useParams: vitest.fn(),
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

describe('SudokuPage', () => {
  const MOCK_DATA: TSudokuPlayData[] = [
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
    isStarted = true,
    data = MOCK_DATA,
    pageId = 1,
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
        isStarted,
        isValid: true,
        isError: false,
        data,
      }),
      runQuery: runQuerySpy,
    }));
    vitest.mocked(useParams).mockReturnValue({ id: pageId.toString() });
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
    renderComponent({
      isLoading: false,
      isStarted: true,
      data: MOCK_DATA,
      pageId: MOCK_DATA.length,
    });
    expect(DurationWrapper).toBeCalled();
    expect(SudokuPlay).toBeCalled();
    expect(runQuerySpy).toBeCalled();
    expect(useNavigate).toBeCalled();
    expect(useParams).toBeCalled();
    expect(navigateSpy).not.toBeCalled();
  });

  it('Should redirect to not found page if play is not available', () => {
    renderComponent({
      isLoading: false,
      isStarted: true,
      data: MOCK_DATA,
      pageId: MOCK_DATA.length + 1,
    });
    expect(navigateSpy).toBeCalled();
  });

  it.each`
    isLoading | isStarted | data
    ${false}  | ${false}  | ${MOCK_DATA}
    ${true}   | ${true}   | ${MOCK_DATA}
    ${true}   | ${false}  | ${MOCK_DATA}
    ${false}  | ${true}   | ${[]}
  `('Should render loading state', ({ isLoading, isStarted, data }) => {
    renderComponent({ isLoading, isStarted, data, pageId: data.length });
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
