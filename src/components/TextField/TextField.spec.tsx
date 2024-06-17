import { render, screen /*, fireEvent*/ } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { TextField, ITextFieldProps } from './TextField';

describe('TextField', () => {
  const defaultProps = {
    value: '',
  };

  const renderComponent = (props: Partial<ITextFieldProps> = {}) => {
    return render(() => <TextField {...defaultProps} {...props} />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByRole('textbox')).toBeDefined();
  });
});
