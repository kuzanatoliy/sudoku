import type { Meta, StoryObj } from 'storybook-solidjs';

import { SudokuField } from './SudokuField';

const meta = {
  title: 'Components/SudokuField',
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
      description: "SudokuField's value value",
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
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
  },
};
