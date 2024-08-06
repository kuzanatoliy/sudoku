import type { Meta, StoryObj } from 'storybook-solidjs';

import { SudokuPlay } from './SudokuPlay';

import plays from '../../../public/plays.json';

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
        [EPlayOptions.play1]: plays[0].play,
        [EPlayOptions.play2]: plays[1].play,
        [EPlayOptions.play3]: plays[2].play,
        [EPlayOptions.play4]: plays[3].play,
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
