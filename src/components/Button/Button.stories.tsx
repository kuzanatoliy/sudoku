import type { Meta, StoryObj } from 'storybook-solidjs';

import { Button } from './Button';
import { EButtonVariant, EButtonSize, IButtonProps } from './Button.types';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'The content of the component',
      table: {
        disable: true,
        type: { summary: 'string' },
      },
    },
    class: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Additional css classes',
      table: {
        disable: false,
        type: { summary: 'string' },
      },
    },
    variant: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: 'The variant to use',
      table: {
        disable: false,
        type: { summary: 'string' },
        defaultValue: { summary: EButtonVariant.CONTAINED },
      },
      options: [EButtonVariant.CONTAINED, EButtonVariant.OUTLINED],
    },
    size: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: 'The size of the component',
      table: {
        disable: false,
        type: { summary: 'string' },
        defaultValue: { summary: EButtonSize.MEDIUM },
      },
      options: [EButtonSize.SMALL, EButtonSize.MEDIUM, EButtonSize.LARGE],
    },
    isDisabled: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      description: 'If true, the component is disabled',
      table: {
        disable: false,
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isFullWidth: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      description: 'If true, the component take all available width',
      table: {
        disable: false,
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'onClick',
      type: { name: 'function', required: false },
      description: 'Click event handler',
      table: {
        disable: false,
        type: { summary: 'function' },
        defaultValue: { summary: '() => {}' },
      },
    },
  },
  args: {
    children: 'BUTTON TEXT',
    variant: EButtonVariant.CONTAINED,
    size: EButtonSize.MEDIUM,
    class: '',
    isDisabled: false,
    isFullWidth: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonComponent: Story = {
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
};

export const ButtonVariants: Story = {
  argTypes: {
    variant: {
      table: { disable: true },
    },
  },
  render: (props: Omit<IButtonProps, 'variant'>) => (
    <div style={{ display: 'flex', gap: '20px', 'flex-wrap': 'wrap' }}>
      <Button {...props} variant={EButtonVariant.CONTAINED}>
        CONTAINED
      </Button>
      <Button {...props} variant={EButtonVariant.OUTLINED}>
        OUTLINED
      </Button>
    </div>
  ),
};

export const ButtonSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
  render: (props: Omit<IButtonProps, 'size'>) => (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        'align-items': 'flex-start',
        'flex-wrap': 'wrap',
      }}
    >
      <Button {...props} size={EButtonSize.SMALL}>
        SMALL
      </Button>
      <Button {...props} size={EButtonSize.MEDIUM}>
        MEDIUM
      </Button>
      <Button {...props} size={EButtonSize.LARGE}>
        LARGE
      </Button>
    </div>
  ),
};
