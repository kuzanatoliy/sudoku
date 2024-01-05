import { render } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { SudokuPlay } from 'components';

vitest.mock('components', async () => {
  const origin =
    await vitest.importActual<typeof import('components')>('components');
  return {
    ...origin,
    SudokuPlay: vitest
      .fn()
      .mockImplementation((props) => <div>{JSON.stringify(props)}</div>),
  };
});

import App from './App';

describe('App', () => {
  const renderComponent = () => render(() => <App />);

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it.skip('Should render component', () => {
    renderComponent();
    expect(SudokuPlay).toBeCalled();
  });
});
