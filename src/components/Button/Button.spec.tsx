import { render, screen, fireEvent } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { Button } from './Button';
import { IButtonProps } from './Button.types';

describe('Button', () => {
  const renderComponent = (props: Partial<IButtonProps> = {}) => {
    return render(() => <Button {...props}>Button</Button>);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should handle click', () => {
    const clickSpy = vitest.fn();
    renderComponent({ onClick: clickSpy });
    fireEvent.click(screen.getByRole('button'));
    expect(clickSpy).toBeCalled();
  });

  it('Should not handle click', () => {
    const clickSpy = vitest.fn();
    renderComponent();
    fireEvent.click(screen.getByRole('button'));
    expect(clickSpy).not.toBeCalled();
  });

  it('Should add custom class', () => {
    const customClass = 'custom-class';
    renderComponent({ class: customClass });
    expect(
      screen.getByRole('button').classList.contains(customClass)
    ).toBeTruthy();
  });

  it('Should be enabled', () => {
    renderComponent({ isDisabled: false });
    expect(screen.getByRole('button')).not.toBeDisabled();
    expect(screen.queryByText('*')).toBeNull();
  });

  it('Should be disabled', () => {
    renderComponent({ isDisabled: true });
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.queryByText('*')).toBeNull();
  });
});
