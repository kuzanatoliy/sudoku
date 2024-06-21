import type { Meta, StoryObj } from 'storybook-solidjs';

import { ETextareaFieldSize, TextareaField } from './TextareaField';

const meta = {
  title: 'Components/TextareaField',
  component: TextareaField,
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
    size: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: 'The size of the component',
      table: {
        disable: false,
        type: { summary: 'string' },
        defaultValue: { summary: ETextareaFieldSize.MEDIUM },
      },
      options: [
        ETextareaFieldSize.SMALL,
        ETextareaFieldSize.MEDIUM,
        ETextareaFieldSize.LARGE,
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
      description: 'Additional css for component root',
      table: {
        disable: false,
        type: { summary: 'string' },
        defaultValue: { summary: ETextareaFieldSize.MEDIUM },
      },
    },
    rows: {
      type: { name: 'number', required: false },
      control: { type: 'number', min: 1 },
      description: 'Additional css for component root',
      table: {
        disable: false,
        type: { summary: 'string' },
        defaultValue: { summary: '3' },
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
    'aria-label': {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Alternative label text',
      table: {
        disable: false,
        type: { summary: 'string' },
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
    size: ETextareaFieldSize.MEDIUM,
    helperMessage: 'Helper text of the text field',
    class: '',
    rows: 3,
    isError: false,
    isDisabled: false,
    isRequired: false,
    'aria-label': '',
  },
} satisfies Meta<typeof TextareaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextareaFieldComponent: Story = {};

export const TextareaFieldSizes: Story = {
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
      <TextareaField {...props} label='SMALL' size={ETextareaFieldSize.SMALL} />
      <TextareaField
        {...props}
        label='MEDIUM'
        size={ETextareaFieldSize.MEDIUM}
      />
      <TextareaField {...props} label='LARGE' size={ETextareaFieldSize.LARGE} />
    </div>
  ),
};
