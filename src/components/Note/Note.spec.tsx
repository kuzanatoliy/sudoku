import { render, screen } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { INoteProps } from './Note.types';

import { Note } from './Note';

describe.skip('Note', () => {
  const DEFAULT_SUMMARY = 'DETAILS SUMMARY';
  const DEFAULT_CONTENT = 'DETAILS CONTENT';

  const renderComponent = (props: Partial<INoteProps> = {}) => {
    return render(() => (
      <Note summary={DEFAULT_SUMMARY} children={DEFAULT_CONTENT} {...props} />
    ));
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should hide content by default', () => {
    renderComponent({ isAutoOpened: false });
    expect(screen.getByText(DEFAULT_CONTENT)).not.toBeVisible();
  });

  it('Should display content by default', () => {
    renderComponent({ isAutoOpened: true });
    expect(screen.getByText(DEFAULT_CONTENT)).toBeVisible();
  });
});
