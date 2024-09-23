import { render, screen, fireEvent } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { HomePage } from './HomePage';
import { useNavigate } from '@solidjs/router';

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

describe('HomePage', () => {
  const renderComponent = () => {
    return render(() => <HomePage />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByRole('heading', { name: 'Sudoku' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Go to play' })).toBeDefined();
    expect(useNavigate).toBeCalled();
  });

  it('Should naviget to games', () => {
    renderComponent();
    fireEvent.click(screen.getByRole('button'));
    expect(navigateSpy).toBeCalled();
  });
});
