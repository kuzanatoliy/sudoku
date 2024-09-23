import { render, screen } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { MainLayout } from './MainLayout';

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

describe('MainLayout', () => {
  const CONTENT = 'MAIN_LAYOUT_CONTENT';

  const renderComponent = () => {
    return render(() => <MainLayout>{CONTENT}</MainLayout>);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByText(CONTENT)).toBeDefined();
    expect(screen.getByRole('heading', { name: 'Sudoku' })).toBeDefined();
    expect(screen.getByText('© Kuzanatoliorg')).toBeDefined();
  });
});
