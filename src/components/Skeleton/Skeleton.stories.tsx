import type { Meta, StoryObj } from 'storybook-solidjs';

import { Skeleton } from './Skeleton';
import { ESkeletonVariant, ISkeletonProps } from './Skeleton.types';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    class: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'Additional css classes',
      table: {
        disable: false,
        type: { summary: 'string' },
      },
    },
    width: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'The width of the component',
      table: {
        disable: false,
        type: { summary: 'string' },
      },
    },
    height: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'The height of the component',
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
        defaultValue: { summary: ESkeletonVariant.BOX },
      },
      options: [
        ESkeletonVariant.BOX,
        ESkeletonVariant.ROUNDED,
        ESkeletonVariant.CIRCLE,
      ],
    },
  },
  args: {
    variant: ESkeletonVariant.BOX,
    height: '100px',
    width: '200px',
    class: '',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonComponent: Story = {};

export const SkeletonVariants: Story = {
  argTypes: {
    variant: {
      table: { disable: true },
    },
  },
  render: (props: Omit<ISkeletonProps, 'variant'>) => (
    <div style={{ display: 'flex', gap: '20px', 'flex-wrap': 'wrap' }}>
      <Skeleton {...props} variant={ESkeletonVariant.BOX} />
      <Skeleton {...props} variant={ESkeletonVariant.ROUNDED} />
      <Skeleton {...props} variant={ESkeletonVariant.CIRCLE} />
    </div>
  ),
};
