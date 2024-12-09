import type { Meta, StoryObj } from 'storybook-solidjs';

import { Link } from './Link';
import { ELinkSize } from './Link.types';
//import { ILinkProps } from './Link.types';

const meta = {
  title: 'Components/Link',
  component: Link,
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
        defaultValue: { summary: ELinkSize.MEDIUM },
      },
      options: [ELinkSize.SMALL, ELinkSize.MEDIUM, ELinkSize.LARGE],
    },
  },
  args: {
    href: '#',
    children: 'Link content',
    size: ELinkSize.MEDIUM,
    class: '',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkComponent: Story = {
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
};

/*export const LinkSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
  render: (props: Omit<ILinkProps, 'summary' | 'children' | 'size'>) => (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        gap: '20px',
      }}
    >
      <Link {...props} size={ELinkSize.SMALL}>
        Harry Potter has never been the star of a Quidditch team, scoring points
        while riding a broom far above the ground. He knows no spells, has never
        helped to hatch a dragon, and has never worn a cloak of invisibility.
      </Link>
      <Link {...props} size={ELinkSize.MEDIUM}>
        Harry Potter has never been the star of a Quidditch team, scoring points
        while riding a broom far above the ground. He knows no spells, has never
        helped to hatch a dragon, and has never worn a cloak of invisibility.
      </Link>
      <Link {...props} size={ELinkSize.LARGE}>
        Harry Potter has never been the star of a Quidditch team, scoring points
        while riding a broom far above the ground. He knows no spells, has never
        helped to hatch a dragon, and has never worn a cloak of invisibility.
      </Link>
    </div>
  ),
};*/
