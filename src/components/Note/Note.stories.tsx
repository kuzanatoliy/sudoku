import type { Meta, StoryObj } from 'storybook-solidjs';

import { Note } from './Note';
// import { ENoteSize, INoteProps } from './Note.types';

const meta = {
  title: 'Components/Note',
  component: Note,
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
    /*summary: {
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
        defaultValue: { summary: ENoteSize.MEDIUM },
      },
      options: [ENoteSize.SMALL, ENoteSize.MEDIUM, ENoteSize.LARGE],
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
    },*/
  },
  args: {
    children: 'Note content',
    /*summary: 'Note summary',
    size: ENoteSize.MEDIUM,
    class: '',
    isAutoOpened: false,*/
  },
} satisfies Meta<typeof Note>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoteComponent: Story = {
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
};

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
