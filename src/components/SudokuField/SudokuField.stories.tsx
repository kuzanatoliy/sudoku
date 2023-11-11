import type { Meta, StoryObj } from 'storybook-solidjs';

import { SudokuField } from './SudokuField';

const meta = {
  title: 'Components/SudokuField',
  component: SudokuField,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: "SudokuField's text value",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'SudokuField component' },
      },
    },
  },
} satisfies Meta<typeof SudokuField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: meta.argTypes.text.table.defaultValue.summary,
  },
};
