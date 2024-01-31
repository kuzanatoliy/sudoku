import { render, screen, fireEvent } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { Button, IButtonProps } from './Button';

describe('Button', () => {
  const renderComponent = (props: Partial<IButtonProps> = {}) => {
    return render(() => <Button {...props}>Button</Button>);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByRole('button')).toBeDefined();
  });

  it('Should handle click', () => {
    const clickSpy = vitest.fn();
    renderComponent({ onClick: clickSpy });
    fireEvent.click(screen.getByRole('button'));
    expect(clickSpy).toBeCalled();
  });
});
