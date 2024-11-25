import type { Meta, StoryObj } from 'storybook-solidjs';

import { SudokuPlay } from './SudokuPlay';

const enum EPlayOptions {
  play1 = 'Play 1',
  play2 = 'Play 2',
  play3 = 'Play 3',
  play4 = 'Play 4',
}

const meta = {
  title: 'SudokuPage/SudokuPlay',
  component: SudokuPlay,
  tags: ['autodocs'],
  argTypes: {
    initialPlay: {
      defaultValue: EPlayOptions.play2,
      control: {
        type: 'select',
      },
      mapping: {
        [EPlayOptions.play1]: [
          0, 7, 0, 0, 6, 2, 0, 5, 0, 0, 6, 0, 0, 0, 9, 0, 0, 4, 8, 0, 0, 4, 1,
          0, 0, 0, 6, 6, 0, 4, 5, 0, 0, 2, 0, 9, 7, 0, 5, 0, 0, 4, 3, 0, 0, 2,
          0, 0, 1, 0, 6, 0, 4, 0, 0, 0, 8, 3, 0, 7, 6, 0, 5, 0, 0, 0, 0, 4, 0,
          0, 1, 2, 5, 2, 0, 0, 0, 0, 0, 3, 0,
        ],
        [EPlayOptions.play2]: [
          9, 5, 3, 0, 1, 0, 2, 7, 0, 1, 0, 0, 7, 6, 0, 0, 0, 0, 0, 0, 6, 0, 0,
          0, 8, 0, 9, 0, 0, 0, 3, 0, 0, 6, 0, 0, 0, 0, 5, 0, 0, 1, 3, 0, 0, 0,
          0, 0, 0, 7, 2, 1, 5, 0, 7, 0, 1, 4, 3, 6, 0, 8, 2, 0, 8, 2, 0, 5, 7,
          0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 6, 0,
        ],
        [EPlayOptions.play3]: [
          1, 2, 0, 5, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 9, 2, 0, 3, 0, 0, 0, 0,
          0, 1, 0, 0, 9, 0, 0, 4, 0, 0, 0, 5, 6, 7, 0, 0, 9, 0, 0, 0, 0, 0, 4,
          0, 2, 0, 6, 0, 0, 0, 0, 5, 0, 3, 2, 0, 9, 6, 4, 0, 0, 0, 0, 6, 0, 0,
          0, 3, 0, 2, 7, 0, 0, 0, 3, 0, 0, 0,
        ],
        [EPlayOptions.play4]: [
          6, 0, 7, 0, 0, 3, 0, 0, 0, 0, 0, 3, 9, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0,
          0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 5, 1, 0,
          0, 0, 0, 6, 0, 0, 7, 4, 3, 8, 5, 0, 0, 6, 0, 2, 0, 0, 6, 0, 0, 0, 0,
          3, 0, 0, 0, 0, 0, 0, 1, 0, 5, 0, 0,
        ],
      },
      options: [
        EPlayOptions.play1,
        EPlayOptions.play2,
        EPlayOptions.play3,
        EPlayOptions.play4,
      ],
      description: 'Initial play value',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: EPlayOptions.play2 },
      },
    },
  },
} satisfies Meta<typeof SudokuPlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialPlay: meta.argTypes.initialPlay.table.defaultValue.summary,
  },
};
