import type { Meta, StoryObj } from 'storybook-solidjs';

import { Note } from './Note';
import { ENoteVariant, ENoteSize, INoteProps, ENoteType } from './Note.types';

const meta = {
  title: 'Components/Note',
  component: Note,
  tags: ['autodocs'],
  argTypes: {
    message: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'The message text',
      table: {
        disable: true,
        type: { summary: 'string' },
      },
    },
    label: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'The label text',
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
        defaultValue: { summary: ENoteVariant.OUTLINED },
      },
      options: [ENoteVariant.BLANKED, ENoteVariant.OUTLINED],
    },
    size: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: 'The size of the component',
      table: {
        disable: false,
        type: { summary: 'string' },
        defaultValue: { summary: ENoteSize.MEDIUM },
      },
      options: [ENoteSize.SMALL, ENoteSize.MEDIUM, ENoteSize.LARGE],
    },
    type: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      description: 'The type of the component',
      table: {
        disable: false,
        type: { summary: 'string' },
        defaultValue: { summary: ENoteType.NOTE },
      },
      options: [ENoteType.NOTE, ENoteType.WARN, ENoteType.ERROR],
    },
  },
  args: {
    label: 'Note',
    message:
      'Additional information that should notificate use about something',
    size: ENoteSize.MEDIUM,
    variant: ENoteVariant.OUTLINED,
    type: ENoteType.NOTE,
    class: '',
  },
} satisfies Meta<typeof Note>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoteComponent: Story = {
  argTypes: {
    message: {
      table: {
        disable: false,
      },
    },
    label: {
      table: {
        disable: false,
      },
    },
  },
};

export const NoteSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
  render: (props: Omit<INoteProps, 'label' | 'message' | 'size'>) => (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        gap: '20px',
      }}
    >
      <Note {...props} size={ENoteSize.SMALL} label='Small note' />
      <Note {...props} size={ENoteSize.MEDIUM} label='Medium note' />
      <Note {...props} size={ENoteSize.LARGE} label='Large note' />
    </div>
  ),
};

export const NoteVariants: Story = {
  argTypes: {
    variant: {
      table: { disable: true },
    },
  },
  render: (props: Omit<INoteProps, 'label' | 'message' | 'variant'>) => (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        gap: '20px',
      }}
    >
      <Note {...props} variant={ENoteVariant.BLANKED} label='Blanked note' />
      <Note {...props} variant={ENoteVariant.OUTLINED} label='Outlined note' />
    </div>
  ),
};

export const NoteTypes: Story = {
  argTypes: {
    type: {
      table: { disable: true },
    },
  },
  render: (props: Omit<INoteProps, 'label' | 'message' | 'variant'>) => (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        gap: '20px',
      }}
    >
      <Note {...props} type={ENoteType.NOTE} label='Note' />
      <Note {...props} type={ENoteType.WARN} label='Warning' />
      <Note {...props} type={ENoteType.ERROR} label='Error' />
    </div>
  ),
};
