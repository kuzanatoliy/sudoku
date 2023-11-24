import { render, screen, fireEvent } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { SudokuField, ISudokuFieldProps } from './SudokuField';

describe('SudokuField', () => {
  const onChangeSpy = vitest.fn();
  const DEFAULT_VALUE = 1;

  const renderComponent = ({
    value = DEFAULT_VALUE,
    onChange = onChangeSpy,
  }: Partial<ISudokuFieldProps> = {}) =>
    render(() => <SudokuField value={value} onChange={onChange} />);

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByText(DEFAULT_VALUE)).toBeDefined();
  });

  it('Should render empty component', () => {
    renderComponent({ value: 0 });
    expect(screen.queryByText(0)).toBeNull();
  });

  it('Should change value', () => {
    renderComponent();
    const element = screen.getByText(DEFAULT_VALUE);
    fireEvent.keyDown(element, { key: 5 });
    expect(onChangeSpy).toBeCalledWith(5);
  });

  it('Should remove value', () => {
    renderComponent();
    const element = screen.getByText(DEFAULT_VALUE);
    fireEvent.keyDown(element, { key: 'Delete' });
    expect(onChangeSpy).toBeCalledWith(0);
  });

  it('Should not change value if key is not correct', () => {
    renderComponent();
    const element = screen.getByText(DEFAULT_VALUE);
    fireEvent.keyDown(element, { key: 'A' });
    expect(onChangeSpy).not.toBeCalled();
  });
});
