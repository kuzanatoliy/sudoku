import type { Meta, StoryObj } from 'storybook-solidjs';

import { Note } from './Note';
import { ENoteVariant, ENoteSize /*INoteProps*/ } from './Note.types';

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
        type: { summary: 'string' },
      },
    },
    label: {
      type: { name: 'string', required: false },
      control: { type: 'text' },
      description: 'The label text',
      table: {
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
  },
  args: {
    label: 'Note',
    message:
      'Additional information that should notificate use about something',
    size: ENoteSize.MEDIUM,
    variant: ENoteVariant.OUTLINED,
    class: '',
  },
} satisfies Meta<typeof Note>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoteComponent: Story = {};

/*export const NoteSizes: Story = {
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
  render: (props: Omit<INoteProps, 'summary' | 'children' | 'size'>) => (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        gap: '20px',
      }}
    >
      <Note {...props} size={ENoteSize.SMALL} summary='SMALL'>
        SMALL CONTENT
      </Note>
      <Note {...props} size={ENoteSize.MEDIUM} summary='MEDIUM'>
        MEDIUM CONTENT
      </Note>
      <Note {...props} size={ENoteSize.LARGE} summary='LARGE'>
        LARGE CONTENT
      </Note>
    </div>
  ),
};

export const NoteOpenState: Story = {
  argTypes: {
    isAutoOpened: {
      table: { disable: true },
    },
  },
  render: (
    props: Omit<INoteProps, 'summary' | 'children' | 'isAutoOpened'>
  ) => (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        gap: '20px',
      }}
    >
      <Note {...props} summary='AUTO OPENED' isAutoOpened>
        AUTO OPENED CONTENT
      </Note>
      <Note {...props} summary='NOT AUTO OPENED'>
        NOT AUTO OPENED CONTENT
      </Note>
    </div>
  ),
};*/
