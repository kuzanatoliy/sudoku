import type { Meta, StoryObj } from 'storybook-solidjs';

import { Details, EDetailsSize } from './Details';

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

/*export const DetailsVariants: Story = {
  argTypes: {
    variant: {
      table: { disable: true },
    },
  },
  render: (props) => (
    <div style={{ display: 'flex', gap: '20px', 'flex-wrap': 'wrap' }}>
      <Details {...props} variant={EDetailsVariant.CONTAINED}>
        CONTAINED
      </Details>
      <Details {...props} variant={EDetailsVariant.OUTLINED}>
        OUTLINED
      </Details>
    </div>
  ),
};*/

/*export const DetailsSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
  render: (props) => (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        'align-items': 'flex-start',
        'flex-wrap': 'wrap',
      }}
    >
      <Details {...props} size={EDetailsSize.SMALL}>
        SMALL
      </Details>
      <Details {...props} size={EDetailsSize.MEDIUM}>
        MEDIUM
      </Details>
      <Details {...props} size={EDetailsSize.LARGE}>
        LARGE
      </Details>
    </div>
  ),
};*/
