import type { Meta, StoryObj } from 'storybook-solidjs';

import { ETextFieldSize, ETextFieldType, TextField } from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    value: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'The value of the input element',
      table: {
        disable: false,
        type: { summary: 'string' },
      },
    },
    placeholder: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description:
        'The short hint displayed in the input before the user enters a value',
      table: {
        disable: false,
        type: { summary: 'string' },
      },
    },
    label: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'The label content',
      table: {
        disable: false,
        type: { summary: 'string' },
      },
    },
    type: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: 'Type of the input element',
      table: {
        disable: false,
        type: { summary: 'string' },
        defaultValue: { summary: ETextFieldType.TEXT },
      },
      options: [ETextFieldType.TEXT, ETextFieldType.PASSWORD],
    },
    size: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: 'The size of the component',
      table: {
        disable: false,
        type: { summary: 'string' },
        defaultValue: { summary: ETextFieldSize.MEDIUM },
      },
      options: [
        ETextFieldSize.SMALL,
        ETextFieldSize.MEDIUM,
        ETextFieldSize.LARGE,
      ],
    },
    helperMessage: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'The helper text content',
      table: {
        disable: false,
        type: { summary: 'string' },
      },
    },
    class: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Additional css classes',
      table: {
        disable: false,
        type: { summary: 'string' },
      },
    },
    isError: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      description: 'If true, the component is disabled',
      table: {
        disable: false,
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isDisabled: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      description: 'If true, the component is disabled',
      table: {
        disable: false,
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isRequired: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      description:
        'If true, the label is displayed as required and the input element is required',
      table: {
        disable: false,
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      action: 'onChange',
      type: { name: 'function', required: false },
      description: 'Change event handler',
      table: {
        disable: false,
        type: { summary: 'function' },
        defaultValue: { summary: '() => {}' },
      },
    },
    onFocus: {
      action: 'onFocus',
      type: { name: 'function', required: false },
      description: 'Focus event handler',
      table: {
        disable: false,
        type: { summary: 'function' },
        defaultValue: { summary: '() => {}' },
      },
    },
    onBlur: {
      action: 'onBlur',
      type: { name: 'function', required: false },
      description: 'Blur event handler',
      table: {
        disable: false,
        type: { summary: 'function' },
        defaultValue: { summary: '() => {}' },
      },
    },
  },
  args: {
    value: '',
    placeholder: 'Type text',
    label: 'Text field label',
    type: ETextFieldType.TEXT,
    size: ETextFieldSize.MEDIUM,
    helperMessage: 'Helper text of the text field',
    class: '',
    isError: false,
    isDisabled: false,
    isRequired: false,
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextFieldComponent: Story = {};

export const TextFieldSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
    label: {
      table: { disable: true },
    },
  },
  render: (props) => (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        gap: '20px',
      }}
    >
      <TextField {...props} label='SMALL' size={ETextFieldSize.SMALL} />
      <TextField {...props} label='MEDIUM' size={ETextFieldSize.MEDIUM} />
      <TextField {...props} label='LARGE' size={ETextFieldSize.LARGE} />
    </div>
  ),
};
