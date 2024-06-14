import type { Meta, StoryObj } from 'storybook-solidjs';

import { Button, EButtonVariant } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      defaultValue: 'BUTTON TEXT',
      description: 'The content of the component',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      defaultValue: EButtonVariant.CONTAINED,
      description: 'The variant to use',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: EButtonVariant.CONTAINED },
      },
      options: [EButtonVariant.CONTAINED, EButtonVariant.OUTLINED],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonComponent: Story = {
  args: {
    children: meta.argTypes.children.defaultValue,
    variant: meta.argTypes.variant.defaultValue,
  },
};

export const ButtonVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px' }}>
      <Button variant={EButtonVariant.CONTAINED}>CONTAINED</Button>
      <Button variant={EButtonVariant.OUTLINED}>OUTLINED</Button>
    </div>
  ),
};
