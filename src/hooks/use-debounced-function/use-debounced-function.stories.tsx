import type { Meta, StoryObj } from 'storybook-solidjs';
import { Button } from 'components';

import {
  DEFAULT_DEBOUNCED_FUNCTION_DELAY,
  useDebouncedFunction,
} from './use-debounced-function';
import { createSignal } from 'solid-js';

const meta = {
  title: 'hooks/useDebouncedFunction',
  component: () => {
    const [value, setValue] = createSignal(0);
    const [dValue, setDValue] = createSignal(0);
    const debouncedSetValue = useDebouncedFunction(setDValue, 1000);
    return (
      <>
        <p style={{ 'font-weight': 600, 'font-size': '1.5rem' }}>
          Value: <span style={{ color: '#c63d2f' }}>{value()}</span>
        </p>
        <p style={{ 'font-weight': 600, 'font-size': '1.5rem' }}>
          Debounced value: <span style={{ color: '#c63d2f' }}>{dValue()}</span>
        </p>
        <div style={{ display: 'flex', gap: '20px', 'flex-wrap': 'wrap' }}>
          <Button
            onClick={() => {
              debouncedSetValue(value() + 1);
              setValue(value() + 1);
            }}
          >
            Increase
          </Button>
          <Button
            onClick={() => {
              debouncedSetValue(value() - 1);
              setValue(value() - 1);
            }}
          >
            Decrease
          </Button>
        </div>
      </>
    );
  },
  tags: ['autodocs'],
  argTypes: {
    func: {
      action: 'func',
      type: { name: 'function', required: true },
      description: 'Debounced function',
      table: {
        disable: false,
        type: { summary: 'function' },
      },
    },
    delay: {
      description: 'Delay before last call will be run',
      table: {
        disable: false,
        type: { summary: 'number' },
        defaultValue: { summary: DEFAULT_DEBOUNCED_FUNCTION_DELAY },
      },
    },
  },
} satisfies Meta<typeof useDebouncedFunction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UseDebouncedFunction: Story = {};
