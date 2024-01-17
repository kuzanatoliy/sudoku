import type { Meta, StoryObj } from 'storybook-solidjs';

import { DurationWrapper } from './DurationWrapper';
import { CustomTime, SECOND, MINUTE, HOUR } from 'timer-engine';

interface IWrapper {
  seconds: number;
  minutes: number;
  hours: number;
}

const Wrapper = (props: IWrapper) => (
  <DurationWrapper
    time={
      new CustomTime(
        props.seconds * SECOND + props.minutes * MINUTE + props.hours * HOUR
      )
    }
  />
);

const meta = {
  title: 'SudokuPage/DurationWrapper',
  component: Wrapper,
  tags: ['autodocs'],
  argTypes: {
    seconds: {
      control: {
        type: 'number',
        min: 0,
        max: 60,
        step: 1,
      },
      description: 'Seconds',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    minutes: {
      control: {
        type: 'number',
        min: 0,
        max: 60,
        step: 1,
      },
      description: 'Minutes',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
    hours: {
      control: {
        type: 'number',
        min: 0,
        max: 24,
        step: 1,
      },
      description: 'Seconds',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
    },
  },
} satisfies Meta<IWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    seconds: meta.argTypes.seconds.table.defaultValue.summary,
    minutes: meta.argTypes.minutes.table.defaultValue.summary,
    hours: meta.argTypes.hours.table.defaultValue.summary,
  },
};
