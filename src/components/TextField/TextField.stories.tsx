import type { Meta, StoryObj } from 'storybook-solidjs';

import { TextField /*ETextFieldSize, ETextFieldVariant*/ } from './TextField';

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    value: {
      type: { name: 'string', required: true },
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
    /*variant: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: 'The variant to use',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ETextFieldVariant.CONTAINED },
      },
      options: [ETextFieldVariant.CONTAINED, ETextFieldVariant.OUTLINED],
    },
    size: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: 'The size of the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: ETextFieldSize.MEDIUM },
      },
      options: [
        ETextFieldSize.SMALL,
        ETextFieldSize.MEDIUM,
        ETextFieldSize.LARGE,
      ],
    },
    isDisabled: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      description: 'If true, the component is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isFullWidth: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      description: 'If true, the component take all available width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'onClick',
      description: 'Click event handler',
      table: {
        type: { summary: 'function' },
        defaultValue: { summary: '() => {}' },
      },
    },*/
  },
  args: {
    value: '',
    placeholder: 'Type text',
    label: 'Text field label',
    /*variant: ETextFieldVariant.CONTAINED,
    size: ETextFieldSize.MEDIUM,
    isDisabled: false,
    isFullWidth: false,*/
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextFieldComponent: Story = {};

/*export const TextFieldVariants: Story = {
  argTypes: {
    variant: {
      table: { disable: true },
    },
  },
  render: (props) => (
    <div style={{ display: 'flex', gap: '20px', 'flex-wrap': 'wrap' }}>
      <TextField {...props} variant={ETextFieldVariant.CONTAINED}>
        CONTAINED
      </TextField>
      <TextField {...props} variant={ETextFieldVariant.OUTLINED}>
        OUTLINED
      </TextField>
    </div>
  ),
};

export const TextFieldSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
  render: (props) => (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        'align-items': 'flex-start',
        'flex-wrap': 'wrap',
      }}
    >
      <TextField {...props} size={ETextFieldSize.SMALL}>
        SMALL
      </TextField>
      <TextField {...props} size={ETextFieldSize.MEDIUM}>
        MEDIUM
      </TextField>
      <TextField {...props} size={ETextFieldSize.LARGE}>
        LARGE
      </TextField>
    </div>
  ),
};*/
