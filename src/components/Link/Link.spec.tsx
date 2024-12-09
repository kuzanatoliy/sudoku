import { render, screen } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { Link } from './Link';

describe('Link', () => {
  const DEFAULT_HREF = 'http://test.com';
  const DEFAULT_CONTENT = 'DETAILS CONTENT';

  const renderComponent = (props: Partial<Parameters<typeof Link>[0]> = {}) => {
    return render(() => (
      <Link children={DEFAULT_CONTENT} href={DEFAULT_HREF} {...props} />
    ));
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByRole('link')).toBeDefined();
  });

  it('Should contain href', () => {
    renderComponent({ href: DEFAULT_HREF });
    expect(screen.getByRole('link')).toHaveAttribute('href', DEFAULT_HREF);
  });

  it('Should add custom class', () => {
    const customClass = 'custom-class';
    renderComponent({ class: customClass });
    expect(
      screen.getByRole('link').classList.contains(customClass)
    ).toBeTruthy();
  });
});
