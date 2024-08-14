import type { Meta, StoryObj } from 'storybook-solidjs';
import { Button } from 'components';
import { createSignal } from 'solid-js';

import {
  TUseLeavingConfirmationProps,
  useLeavingConfirmation,
} from './use-leaving-confirmation';

const meta = {
  title: 'hooks/useLeavingConfirmation',
  component: (props: TUseLeavingConfirmationProps) => {
    const [isRunnable, setIsRunnable] = createSignal(false);
    useLeavingConfirmation({
      comparator: () => {
        props.comparator();
        return isRunnable();
      },
    });
    return (
      <div style={{ display: 'flex', gap: '20px', 'flex-wrap': 'wrap' }}>
        <Button
          onClick={() => {
            setIsRunnable(true);
            location.href = location.origin;
            setTimeout(() => {
              setIsRunnable(false);
            }, 100);
          }}
        >
          Leave
        </Button>
        <Button
          onClick={() => {
            setIsRunnable(true);
            location.reload();
            setTimeout(() => {
              setIsRunnable(false);
            }, 100);
          }}
        >
          Reload
        </Button>
      </div>
    );
  },
  tags: ['autodocs'],
  argTypes: {
    comparator: {
      action: 'comparator',
      type: { name: 'function', required: true },
      description: 'The function should control confirmation conditions',
      table: {
        disable: false,
        type: { summary: 'function' },
      },
    },
  },
} satisfies Meta<typeof useLeavingConfirmation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UseLeavingConfirmation: Story = {};
