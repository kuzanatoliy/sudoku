import { fireEvent, render, screen } from '@solidjs/testing-library';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { TextareaField } from './TextareaField';
import { ITextareaFieldProps } from './TextareaField.types';

describe('TextareaField', () => {
  const renderComponent = (props: Partial<ITextareaFieldProps> = {}) => {
    return render(() => <TextareaField {...props} />);
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(screen.getByRole('textbox')).toBeDefined();
  });

  it('Should validate onFocus/onBlur events', () => {
    const onFocusSpy = vitest.fn();
    const onBlurSpy = vitest.fn();
    renderComponent({ onFocus: onFocusSpy, onBlur: onBlurSpy });
    const textareaField = screen.getByRole('textbox');
    fireEvent.focus(textareaField);
    fireEvent.blur(textareaField);
    expect(onFocusSpy).toBeCalled();
    expect(onBlurSpy).toBeCalled();
  });

  it('Should validate default onFocus/onBlur behaviour', async () => {
    renderComponent();
    const textareaField = screen.getByRole('textbox');
    expect(textareaField).not.toHaveFocus();
    await userEvent.click(textareaField);
    expect(textareaField).toHaveFocus();
    await userEvent.tab();
    expect(textareaField).not.toHaveFocus();
  });

  it('Should validate onChange event', async () => {
    const onChangeSpy = vitest.fn();
    const newTextValue = 'new text value';
    renderComponent({ onChange: onChangeSpy });
    const textareaField = screen.getByRole('textbox');
    await userEvent.type(textareaField, newTextValue);
    expect(onChangeSpy).toBeCalledWith(newTextValue);
  });

  it('Should validate default onChange behaviour', async () => {
    const newTextValue = 'new text value';
    renderComponent();
    const textareaField = screen.getByRole('textbox');
    await userEvent.type(textareaField, newTextValue);
    expect(textareaField).toHaveValue(newTextValue);
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
    expect(screen.getByRole('textbox')).not.toBeDisabled();
    expect(screen.queryByText('*')).toBeNull();
  });

  it('Should be disabled', () => {
    renderComponent({ isDisabled: true });
    expect(screen.getByRole('textbox')).toBeDisabled();
    expect(screen.queryByText('*')).toBeNull();
  });

  it('Should not be invalid', () => {
    renderComponent({ isError: false });
    expect(screen.getByRole('textbox').getAttribute('aria-invalid')).toBe(
      'false'
    );
    expect(screen.queryByText('*')).toBeNull();
  });

  it('Should be invalid', () => {
    renderComponent({ isError: true });
    expect(screen.getByRole('textbox').getAttribute('aria-invalid')).toBe(
      'true'
    );
    expect(screen.queryByText('*')).toBeNull();
  });

  it('Should validate helper text', () => {
    const helperMessage = 'helper message';
    renderComponent({ helperMessage });
    expect(screen.getByText(helperMessage)).toBeDefined();
  });

  it('Should add custom class', () => {
    const customClass = 'custom-class';
    renderComponent({ class: customClass });
    expect(
      screen.getByRole('group').classList.contains(customClass)
    ).toBeTruthy();
  });
});
