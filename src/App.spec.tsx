import { render } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { ESudokuFieldSize, SudokuPlay, useDeviceContext } from 'components';

vitest.mock('components', async () => {
  const origin =
    await vitest.importActual<typeof import('components')>('components');
  return {
    ...origin,
    SudokuPlay: vitest
      .fn()
      .mockImplementation((props) => <div>{JSON.stringify(props)}</div>),
    useDeviceContext: vitest
      .fn()
      .mockImplementation(() => () => ({ isMobile: false, isTablet: false })),
  };
});

import App from './App';

describe('App', () => {
  const renderComponent = ({ isMobile = false, isTablet = false } = {}) => {
    vitest
      .mocked(useDeviceContext)
      .mockImplementation(
        () =>
          (() => ({ isMobile, isTablet })) as unknown as ReturnType<
            typeof useDeviceContext
          >
      );
    return render(() => <App />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
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
