import { render, screen } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';
import { ParentProps } from 'solid-js';

import { IPlayMenuProps, PlayMenu } from './PlayMenu';

describe('PlayMenu', () => {
  const CONTENT = 'MENU CONTENT';

  const renderComponent = (props: Partial<ParentProps<IPlayMenuProps>> = {}) =>
    render(() => <PlayMenu children={CONTENT} {...props} />);

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByRole('list')).toBeDefined();
  });

  it('Should render component', () => {
    renderComponent({ children: CONTENT });
    expect(screen.getByRole('list')).toHaveTextContent(CONTENT);
  });
});
