import { fireEvent, render, screen } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { TextField, ITextFieldProps } from './TextField';

describe('TextField', () => {
  const renderComponent = (props: Partial<ITextFieldProps> = {}) => {
    return render(() => <TextField {...props} />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByRole('textbox')).toBeDefined();
  });

  it('Should pass workflow', () => {
    renderComponent();
    const textField = screen.getByRole('textbox');
    fireEvent.focus(textField);
    fireEvent.change(textField, { target: { value: 'new value' } });
    fireEvent.blur(textField);
  });

  it('Should validate onFocus/onBlur events', () => {
    const onFocusSpy = vitest.fn();
    const onBlurSpy = vitest.fn();
    renderComponent({ onFocus: onFocusSpy, onBlur: onBlurSpy });
    const textField = screen.getByRole('textbox');
    fireEvent.focus(textField);
    fireEvent.blur(textField);
    expect(onFocusSpy).toBeCalled();
    expect(onBlurSpy).toBeCalled();
  });

  it('Should validate onChange event', async () => {
    const onChangeSpy = vitest.fn();
    const newTextValue = 'new text value';
    renderComponent({ onChange: onChangeSpy });
    const textField = screen.getByRole('textbox');
    await userEvent.type(textField, newTextValue);
    expect(onChangeSpy).toBeCalledWith(newTextValue);
  });

  it('Should validate label text', () => {
    const labelText = 'Label text';
    renderComponent({ label: labelText });
    expect(screen.getByLabelText(labelText)).toBeDefined();
    expect(screen.queryByText('*')).toBeNull();
  });

  it('Should validate aria label text', () => {
    const labelText = 'Label text';
    renderComponent({ 'aria-label': labelText });
    expect(screen.getByLabelText(labelText)).toBeDefined();
  });

  it('Should validate placeholder', () => {
    const placeholderText = 'Placeholder text';
    renderComponent({ placeholder: placeholderText });
    expect(screen.getByPlaceholderText(placeholderText)).toBeDefined();
  });

  it('Should be required', () => {
    renderComponent({ label: 'Label text', isRequired: true });
    expect(screen.getByRole('textbox').getAttribute('aria-required')).toBe(
      'true'
    );
    expect(screen.getByText('*')).toBeDefined();
  });

  it('Should not be required', () => {
    renderComponent({ label: 'Label text', isRequired: false });
    expect(screen.getByRole('textbox').getAttribute('aria-required')).toBe(
      'false'
    );
    expect(screen.queryByText('*')).toBeNull();
  });

  it('Should be enabled', () => {
    renderComponent({ isDisabled: false });
    expect(screen.getByRole('textbox').hasAttribute('disabled')).toBeFalsy();
    expect(screen.queryByText('*')).toBeNull();
  });

  it('Should be disabled', () => {
    renderComponent({ isDisabled: true });
    expect(screen.getByRole('textbox').hasAttribute('disabled')).toBeTruthy();
    expect(screen.queryByText('*')).toBeNull();
  });
});
