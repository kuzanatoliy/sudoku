import type { Meta, StoryObj } from 'storybook-solidjs';

import { SudokuField } from './SudokuField';

const meta = {
  title: 'SudokuPage/SudokuField',
  component: SudokuField,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: {
        type: 'number',
        min: 0,
        max: 9,
        step: 1,
      },
      description: "SudokuField's value",
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
      description: 'Disable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isHighlighted: {
      control: {
        type: 'boolean',
      },
      description: 'Highlighted',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isError: {
      control: {
        type: 'boolean',
      },
      description: 'Error',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    onChange: { action: 'onChange' },
  },
} satisfies Meta<typeof SudokuField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: meta.argTypes.value.table.defaultValue.summary,
    isDisabled: meta.argTypes.isDisabled.table.defaultValue.summary,
    isHighlighted: meta.argTypes.isHighlighted.table.defaultValue.summary,
    isError: meta.argTypes.isError.table.defaultValue.summary,
  },
};
