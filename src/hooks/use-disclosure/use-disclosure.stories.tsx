import type { Meta, StoryObj } from 'storybook-solidjs';
import { Button } from 'components';

import { TUseDisclosureProps, useDisclosure } from './use-disclosure';

const meta = {
  title: 'hooks/useDisclosure',
  component: (props: TUseDisclosureProps) => {
    const { isOpen, onClose, onOpen, onToggle } = useDisclosure(props);
    return (
      <>
        <p style={{ 'font-weight': 600, 'font-size': '1.5rem' }}>
          State: <span style={{ color: '#c63d2f' }}>{isOpen().toString()}</span>
        </p>
        <div style={{ display: 'flex', gap: '20px', 'flex-wrap': 'wrap' }}>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={onOpen}>Open</Button>
          <Button onClick={onToggle}>Toggle</Button>
        </div>
      </>
    );
  },
  tags: ['autodocs'],
  argTypes: {
    isOpenInDefault: {
      type: { name: 'boolean', required: false },
      control: { type: 'boolean' },
      description:
        'If true, isOpen state will be initially true. Note: The story is not controlled from the document',
      table: {
        disable: false,
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof useDisclosure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UseDisclosure: Story = {};
