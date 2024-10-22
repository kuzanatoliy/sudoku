import type { Meta, StoryObj } from 'storybook-solidjs';

import { Card } from './Card';
import { ECardSize, ICardProps } from './Card.types';

const meta = {
  title: 'Components/Card',
  component: Card,
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
        defaultValue: { summary: ECardSize.MEDIUM },
      },
      options: [ECardSize.SMALL, ECardSize.MEDIUM, ECardSize.LARGE],
    },
  },
  args: {
    children: 'Card content',
    size: ECardSize.MEDIUM,
    class: '',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardComponent: Story = {
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
};

export const CardSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
  render: (props: Omit<ICardProps, 'summary' | 'children' | 'size'>) => (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        gap: '20px',
      }}
    >
      <Card {...props} size={ECardSize.SMALL}>
        Harry Potter has never been the star of a Quidditch team, scoring points
        while riding a broom far above the ground. He knows no spells, has never
        helped to hatch a dragon, and has never worn a cloak of invisibility.
      </Card>
      <Card {...props} size={ECardSize.MEDIUM}>
        Harry Potter has never been the star of a Quidditch team, scoring points
        while riding a broom far above the ground. He knows no spells, has never
        helped to hatch a dragon, and has never worn a cloak of invisibility.
      </Card>
      <Card {...props} size={ECardSize.LARGE}>
        Harry Potter has never been the star of a Quidditch team, scoring points
        while riding a broom far above the ground. He knows no spells, has never
        helped to hatch a dragon, and has never worn a cloak of invisibility.
      </Card>
    </div>
  ),
};
