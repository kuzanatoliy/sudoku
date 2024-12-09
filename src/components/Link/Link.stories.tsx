import type { Meta, StoryObj } from 'storybook-solidjs';

import { Link } from './Link';
import { ELinkColorScheme, ELinkSize, ILinkProps } from './Link.types';

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
    href: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'The link url',
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
    colorScheme: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: 'The size of the component',
      table: {
        disable: false,
        type: { summary: 'string' },
        defaultValue: { summary: ELinkColorScheme.DARK },
      },
      options: [ELinkColorScheme.DARK, ELinkColorScheme.LIGHT],
    },
  },
  args: {
    href: '#',
    children: 'Link content',
    size: ELinkSize.MEDIUM,
    colorScheme: ELinkColorScheme.DARK,
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

export const LinkSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
  render: (props: Omit<ILinkProps, 'children' | 'size'>) => (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        padding: '20px',
        gap: '20px',
        'border-radius': '20px',
        background:
          props.colorScheme === ELinkColorScheme.DARK ? '#d8d9da' : '#004445',
      }}
    >
      <Link {...props} size={ELinkSize.SMALL}>
        Small link
      </Link>
      <Link {...props} size={ELinkSize.MEDIUM}>
        Medium link
      </Link>
      <Link {...props} size={ELinkSize.LARGE}>
        Large link
      </Link>
    </div>
  ),
};

export const LinkColorSchemes: Story = {
  argTypes: {
    colorScheme: {
      table: { disable: true },
    },
  },
  render: (props: Omit<ILinkProps, 'children' | 'size'>) => (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'row',
        gap: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          'flex-direction': 'column',
          padding: '20px',
          gap: '20px',
          'border-radius': '20px',
          background: '#d8d9da',
        }}
      >
        <Link {...props} colorScheme={ELinkColorScheme.DARK}>
          Large link
        </Link>
      </div>
      <div
        style={{
          padding: '20px',
          'border-radius': '20px',
          background: '#004445',
        }}
      >
        <Link {...props} colorScheme={ELinkColorScheme.LIGHT}>
          Link content
        </Link>
      </div>
    </div>
  ),
};
