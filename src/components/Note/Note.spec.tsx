import { render, screen } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { INoteProps } from './Note.types';

import { Note } from './Note';

describe('Note', () => {
  const DEFAULT_LABEL = 'NOTE';
  const DEFAULT_MESSAGE = 'MESSAGE';

  const renderComponent = (props: Partial<INoteProps> = {}) => {
    return render(() => (
      <Note label={DEFAULT_LABEL} message={DEFAULT_MESSAGE} {...props} />
    ));
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByText(DEFAULT_LABEL, { exact: false })).toBeDefined();
    expect(screen.getByText(DEFAULT_MESSAGE)).toBeDefined();
  });

  it('Should add custom class', () => {
    const customClass = 'custom-class';
    renderComponent({ class: customClass });
    expect(
      screen.getByRole('group').classList.contains(customClass)
    ).toBeTruthy();
  });
});
