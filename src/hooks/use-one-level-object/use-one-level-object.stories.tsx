import type { Meta, StoryObj } from 'storybook-solidjs';
import { Button } from 'components';
import { createSignal, createEffect } from 'solid-js';

import { useOneLevelObject } from './use-one-level-object';

const ORIGINAL_STRING = 'string';
const ORIGINAL_OBJECT = {
  test1: 'test1',
  test2: 'test2',
  deep: { test3: 'test3', test4: 'test4' },
};
const ORIGINAL_ARRAY = ['test1', 'test2', ['test3', 'test4']];

const meta = {
  title: 'hooks/useOneLevelObject',
  component: () => {
    const [object, setObject] = createSignal<
      string | Record<string, unknown> | Array<unknown>
    >(ORIGINAL_STRING);
    const [transformedObject, setTransformedObject] = createSignal<unknown>('');

    createEffect(() => {
      const to = useOneLevelObject(object());
      console.log(to);
      setTransformedObject(to);
    });
    return (
      <>
        <div style={{ display: 'flex', gap: '20px', 'flex-wrap': 'wrap' }}>
          <Button onClick={() => setObject(ORIGINAL_STRING)}>Use string</Button>
          <Button onClick={() => setObject(ORIGINAL_OBJECT)}>Use Object</Button>
          <Button onClick={() => setObject(ORIGINAL_ARRAY)}>Use Array</Button>
        </div>
        <br />
        <strong>Original:</strong>
        <p>
          <code>{JSON.stringify(object())}</code>
        </p>
        <strong>Transformed:</strong>
        <p>
          <code>{JSON.stringify(transformedObject())}</code>
        </p>
      </>
    );
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UseOneLevelObject: Story = {};
