import type { Meta, StoryObj } from 'storybook-solidjs';

import { Pill } from './Pill';
import { EPillSize, EPillVariant, IPillProps } from './Pill.types';

const meta = {
  title: 'Components/Pill',
  component: Pill,
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
    size: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: 'The size of the component',
      table: {
        disable: false,
        type: { summary: 'string' },
        defaultValue: { summary: EPillSize.MEDIUM },
      },
      options: [EPillSize.SMALL, EPillSize.MEDIUM, EPillSize.LARGE],
    },
    variant: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: 'The variant to use',
      table: {
        disable: false,
        type: { summary: 'string' },
        defaultValue: { summary: EPillVariant.FILLED },
      },
      options: [
        EPillVariant.BLANKED,
        EPillVariant.FILLED,
        EPillVariant.OUTLINED,
      ],
    },
  },
  args: {
    children: 'Pill content',
    variant: EPillVariant.FILLED,
    size: EPillSize.MEDIUM,
    class: '',
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PillComponent: Story = {
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
};

export const PillSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
  render: (props: Omit<IPillProps, 'children' | 'size'>) => (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        'flex-wrap': 'wrap',
        'align-items': 'flex-start',
      }}
    >
      <Pill {...props} size={EPillSize.SMALL}>
        SMALL CONTENT
      </Pill>
      <Pill {...props} size={EPillSize.MEDIUM}>
        MEDIUM CONTENT
      </Pill>
      <Pill {...props} size={EPillSize.LARGE}>
        LARGE CONTENT
      </Pill>
    </div>
  ),
};

export const PillVariants: Story = {
  argTypes: {
    variant: {
      table: { disable: true },
    },
  },
  render: (props: Omit<IPillProps, 'children' | 'variant'>) => (
    <div style={{ display: 'flex', gap: '20px', 'flex-wrap': 'wrap' }}>
      <Pill {...props} variant={EPillVariant.BLANKED}>
        BLANKED
      </Pill>
      <Pill {...props} variant={EPillVariant.FILLED}>
        FILLED
      </Pill>
      <Pill {...props} variant={EPillVariant.OUTLINED}>
        OUTLINED
      </Pill>
    </div>
  ),
};
