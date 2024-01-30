import { render } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { DeviceProvider } from 'components';
import { SudokuPage } from 'sudoku-page';

import { App } from './App';

vitest.mock('components', async () => {
  const origin =
    await vitest.importActual<typeof import('components')>('components');
  return {
    ...origin,
    DeviceProvider: vitest
      .fn()
      .mockImplementation((props) => <div>{props.children}</div>),
  };
});

vitest.mock('sudoku-page', async () => {
  const origin =
    await vitest.importActual<typeof import('sudoku-page')>('sudoku-page');
  return {
    ...origin,
    SudokuPage: vitest
      .fn()
      .mockImplementation((props) => <div>{props.children}</div>),
  };
});

describe('App', () => {
  const renderComponent = () => {
    return render(() => <App />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it.skip('Should render component', () => {
    renderComponent();
    expect(DeviceProvider).toBeCalled();
    expect(SudokuPage).toBeCalled();
  });
});
