import type { Meta, StoryObj } from 'storybook-solidjs';

import { SudokuPlay } from './SudokuPlay';

const meta = {
  title: 'Components/SudokuPlay',
  component: SudokuPlay,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SudokuPlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
