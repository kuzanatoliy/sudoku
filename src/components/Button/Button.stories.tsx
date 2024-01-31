import type { Meta, StoryObj } from 'storybook-solidjs';

import { Button } from './Button';

interface IWrapperProps {
  text: string;
  onClick: () => void;
}

const Wrapper = (props: IWrapperProps) => (
  <Button onClick={props.onClick}>{props.text}</Button>
);

const meta = {
  title: 'Components/Button',
  component: Wrapper,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
      description: "Button's text",
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Button' },
      },
    },
  },
} satisfies Meta<IWrapperProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: meta.argTypes.text.table.defaultValue.summary,
  },
};
