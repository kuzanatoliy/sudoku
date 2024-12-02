import { render, screen } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';
import { ParentProps } from 'solid-js';

import { IPlayMenuItemProps, PlayMenuItem } from './PlayMenuItem';

describe('PlayMenuItem', () => {
  const CONTENT = 'MENU CONTENT';

  const renderComponent = (
    props: Partial<ParentProps<IPlayMenuItemProps>> = {}
  ) => render(() => <PlayMenuItem children={CONTENT} {...props} />);

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByRole('listitem')).toBeDefined();
  });

  it('Should have content', () => {
    renderComponent({ children: CONTENT });
    expect(screen.getByRole('listitem')).toHaveTextContent(CONTENT);
  });
});
