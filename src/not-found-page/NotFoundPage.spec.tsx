import { render, screen, fireEvent } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { NotFoundPage } from './NotFoundPage';

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

describe('NotFoundPage', () => {
  const renderComponent = () => {
    return render(() => <NotFoundPage />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByRole('heading')).toBeDefined();
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('Should handle click', () => {
    renderComponent();
    fireEvent.click(screen.getByRole('button'));
    expect(navigateSpy).toBeCalled();
  });
});
