/* import { render, screen } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { IPillProps } from './Pill.types';

import { Pill } from './Skeleton';

describe.skip('Pill', () => {
  const DEFAULT_CONTENT = 'PILL CONTENT';

  const renderComponent = (
    props: Partial<IPillProps & { children?: string }> = {}
  ) => {
    return render(() => <Pill children={DEFAULT_CONTENT} {...props} />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByText(DEFAULT_CONTENT)).toBeDefined();
  });

  it('Should add custom class', () => {
    const customClass = 'custom-class';
    renderComponent({ class: customClass });
    expect(
      screen.getByRole('group').classList.contains(customClass)
    ).toBeTruthy();
  });
});*/
