import { fireEvent, render, screen } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { useQuery } from 'query';
import { TSudokuPlayData } from 'types';

import { SudokuPlaysPage } from './SudokuPlaysPage';
import { useNavigate } from '@solidjs/router';
import { PlayPreview } from './PlayPreview';

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
  };
});

vitest.mock('./PlayPreview', async () => {
  const origin =
    await vitest.importActual<typeof import('./PlayPreview')>('./PlayPreview');
  return {
    ...origin,
    PlayPreview: vitest
      .fn()
      .mockImplementation((props) => <div>{JSON.stringify(props)}</div>),
  };
});

describe('SudokuPlaysPage', () => {
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
    isLoading = false,
    isStarted = true,
    data = MOCK_DATA,
  } = {}) => {
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
    return render(() => <SudokuPlaysPage />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent({
      isLoading: false,
      isStarted: true,
      data: MOCK_DATA,
    });
    expect(PlayPreview).toBeCalledTimes(MOCK_DATA.length);
    expect(runQuerySpy).toBeCalled();
    expect(useNavigate).toBeCalled();
    expect(navigateSpy).not.toBeCalled();
  });

  it.each`
    isLoading | isStarted | data
    ${false}  | ${false}  | ${MOCK_DATA}
    ${true}   | ${true}   | ${MOCK_DATA}
    ${true}   | ${false}  | ${MOCK_DATA}
    ${false}  | ${true}   | ${[]}
  `('Should render loading state', ({ isLoading, isStarted, data }) => {
    renderComponent({ isLoading, isStarted, data });
    expect(runQuerySpy).toBeCalled();
  });

  it('Should naviget to game', () => {
    renderComponent();
    fireEvent.click(screen.getAllByRole('link')[0]);
    expect(navigateSpy).toBeCalledWith('/plays/1');
  });
});
