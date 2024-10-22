import { render, screen } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { ICardProps } from './Card.types';

import { Card } from './Card';

describe('Card', () => {
  const DEFAULT_CONTENT = 'DETAILS CONTENT';

  const renderComponent = (props: Partial<ICardProps> = {}) => {
    return render(() => <Card children={DEFAULT_CONTENT} {...props} />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByRole('group')).toHaveTextContent(DEFAULT_CONTENT);
  });

  it('Should add custom class', () => {
    const customClass = 'custom-class';
    renderComponent({ class: customClass });
    expect(
      screen.getByRole('group').classList.contains(customClass)
    ).toBeTruthy();
  });
});
