import { render } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { Navigate } from '@solidjs/router';

import { DeviceProvider } from 'components';
import { HomePage } from 'home-page';
import { NotFoundPage } from 'not-found-page';
import { SudokuPage } from 'sudoku-page';

import { MainLayout } from './MainLayout';

import { App } from './App';

vitest.mock('@solidjs/router', async () => {
  const origin =
    await vitest.importActual<typeof import('@solidjs/router')>(
      '@solidjs/router'
    );
  return {
    ...origin,
    Navigate: vitest
      .fn()
      .mockImplementation((props) => <div>{props.children}</div>),
  };
});

vitest.mock('./MainLayout', async () => {
  const origin =
    await vitest.importActual<typeof import('./MainLayout')>('./MainLayout');
  return {
    ...origin,
    MainLayout: vitest
      .fn()
      .mockImplementation((props) => <div>{props.children}</div>),
  };
});

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

vitest.mock('home-page', async () => {
  const origin =
    await vitest.importActual<typeof import('home-page')>('home-page');
  return {
    ...origin,
    HomePage: vitest
      .fn()
      .mockImplementation((props) => <div>{props.children}</div>),
  };
});

vitest.mock('not-found-page', async () => {
  const origin =
    await vitest.importActual<typeof import('not-found-page')>(
      'not-found-page'
    );
  return {
    ...origin,
    NotFoundPage: vitest
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

// TODO: add new test case
describe('App', () => {
  const renderComponent = () => {
    return render(() => <App />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(HomePage).not.toBeCalled();
    expect(DeviceProvider).toBeCalled();
    expect(SudokuPage).not.toBeCalled();
    expect(NotFoundPage).not.toBeCalled();
    expect(MainLayout).toBeCalled();
    expect(Navigate).toBeCalled();
  });

  it('Should render HomePage', () => {
    global.location.hash = '/home';
    renderComponent();
    expect(HomePage).toBeCalled();
    expect(DeviceProvider).toBeCalled();
    expect(SudokuPage).not.toBeCalled();
    expect(NotFoundPage).not.toBeCalled();
    expect(MainLayout).not.toBeCalled();
    expect(Navigate).not.toBeCalled();
  });

  it('Should render SudokuPage', () => {
    global.location.hash = '/plays/1';
    renderComponent();
    expect(HomePage).not.toBeCalled();
    expect(DeviceProvider).toBeCalled();
    expect(SudokuPage).toBeCalled();
    expect(NotFoundPage).not.toBeCalled();
    expect(MainLayout).toBeCalled();
    expect(Navigate).not.toBeCalled();
  });

  it('Should render NotFoundPage', () => {
    global.location.hash = '/not-existed-path';
    renderComponent();
    expect(HomePage).not.toBeCalled();
    expect(DeviceProvider).toBeCalled();
    expect(SudokuPage).not.toBeCalled();
    expect(NotFoundPage).toBeCalled();
    expect(MainLayout).toBeCalled();
    expect(Navigate).not.toBeCalled();
  });
});
