import { render, screen } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { IPillProps } from './Pill.types';

import { Pill } from './Pill';

describe('Pill', () => {
  const DEFAULT_CONTENT = 'PILL CONTENT';

  const renderComponent = (props: Partial<IPillProps> = {}) => {
    return render(() => <Pill children={DEFAULT_CONTENT} {...props} />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByText(DEFAULT_CONTENT)).toBeDefined();
  });
});
