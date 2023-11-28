import { render } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { SudokuPlay, ISudokuPlayProps } from './SudokuPlay';

describe('SudokuPlay', () => {
  const renderComponent = ({ ...props }: Partial<ISudokuPlayProps> = {}) =>
    render(() => <SudokuPlay {...props} />);

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    const container = renderComponent();
    expect(container).toBeDefined();
  });
});
