import type { Meta, StoryObj } from 'storybook-solidjs';

import { Details } from './Details';
import { EDetailsSize, IDetailsProps } from './Details.types';

const meta = {
  title: 'Components/Details',
  component: Details,
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
    summary: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'The summary of the component',
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
        defaultValue: { summary: EDetailsSize.MEDIUM },
      },
      options: [EDetailsSize.SMALL, EDetailsSize.MEDIUM, EDetailsSize.LARGE],
    },
    isAutoOpened: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      description: 'If true, the details should be initially opened',
      table: {
        disable: false,
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    children: 'Details content',
    summary: 'Details summary',
    size: EDetailsSize.MEDIUM,
    class: '',
    isAutoOpened: false,
  },
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DetailsComponent: Story = {
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
};

export const DetailsSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
  render: (props: Omit<IDetailsProps, 'summary' | 'children' | 'size'>) => (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        gap: '20px',
      }}
    >
      <Details {...props} size={EDetailsSize.SMALL} summary='SMALL'>
        SMALL CONTENT
      </Details>
      <Details {...props} size={EDetailsSize.MEDIUM} summary='MEDIUM'>
        MEDIUM CONTENT
      </Details>
      <Details {...props} size={EDetailsSize.LARGE} summary='LARGE'>
        LARGE CONTENT
      </Details>
    </div>
  ),
};

export const DetailsOpenState: Story = {
  argTypes: {
    isAutoOpened: {
      table: { disable: true },
    },
  },
  render: (
    props: Omit<IDetailsProps, 'summary' | 'children' | 'isAutoOpened'>
  ) => (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        gap: '20px',
      }}
    >
      <Details {...props} summary='AUTO OPENED' isAutoOpened>
        AUTO OPENED CONTENT
      </Details>
      <Details {...props} summary='NOT AUTO OPENED'>
        NOT AUTO OPENED CONTENT
      </Details>
    </div>
  ),
};
