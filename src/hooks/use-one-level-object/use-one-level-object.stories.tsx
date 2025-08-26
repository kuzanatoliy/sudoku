import type { Meta, StoryObj } from 'storybook-solidjs';

import { TUseOneLevelObject, useOneLevelObject } from './use-one-level-object';

const ORIGINAL_STRING = 'string';
const ORIGINAL_OBJECT = {
  test1: 'test1',
  test2: 'test2',
  deep: { test3: 'test3', test4: 'test4' },
};
const ORIGINAL_ARRAY = ['test1', 'test2', ['test3', 'test4']];

const enum EOptions {
  string = 'String',
  object = 'Object',
  array = 'Array',
}

const meta = {
  title: 'hooks/useOneLevelObject',
  component: (props: TUseOneLevelObject) => {
    const transformedObject = useOneLevelObject(props);
    return (
      <>
        <br />
        <strong>Original:</strong>
        <p>
          <code>{JSON.stringify(props.object)}</code>
        </p>
        <strong>Transformed:</strong>
        <p>
          <code>{JSON.stringify(transformedObject())}</code>
        </p>
      </>
    );
  },
  tags: ['autodocs'],
  argTypes: {
    object: {
      defaultValue: EOptions.string,
      control: {
        type: 'select',
      },
      mapping: {
        [EOptions.string]: ORIGINAL_STRING,
        [EOptions.object]: ORIGINAL_OBJECT,
        [EOptions.array]: ORIGINAL_ARRAY,
      },
      options: [EOptions.string, EOptions.object, EOptions.array],
      description: 'Initial play value',
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: EOptions.string },
      },
    },
  },
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UseOneLevelObject: Story = {};
