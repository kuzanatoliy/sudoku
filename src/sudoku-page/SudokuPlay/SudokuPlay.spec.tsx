import { fireEvent, render, screen } from '@solidjs/testing-library';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { SudokuPlay, ISudokuPlayProps } from './SudokuPlay';
import { SudokuField } from '../SudokuField';
import { TSudokuValue, isEffectedItem } from 'sudoku-engine';

vitest.mock('../SudokuField', async () => {
  const origin =
    await vitest.importActual<typeof import('../SudokuField')>(
      '../SudokuField'
    );
  return {
    SudokuField: vitest
      .fn()
      .mockImplementation((props) => <origin.SudokuField {...props} />),
  };
});

vitest.mock('sudoku-engine', async () => {
  const origin =
    await vitest.importActual<typeof import('sudoku-engine')>('sudoku-engine');
  return {
    ...origin,
    SudokuBattle: function (play: TSudokuValue[]) {
      return {
        setValue: vitest
          .fn()
          .mockImplementation(
            (index: number, value: TSudokuValue) => (play[index] = value)
          ),
        getState: vitest.fn().mockImplementation(() =>
          play.map((item) => ({
            value: item,
          }))
        ),
      };
    },
    isEffectedItem: vitest.fn(),
  };
});

describe('SudokuPlay', () => {
  const PLAY: TSudokuValue[] = [
    1, 2, 0, 5, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 9, 2, 0, 3, 0, 0, 0, 0, 0, 1,
    0, 0, 9, 0, 0, 4, 0, 0, 0, 5, 6, 7, 0, 0, 9, 0, 0, 0, 0, 0, 4, 0, 2, 0, 6,
    0, 0, 0, 0, 5, 0, 3, 2, 0, 9, 6, 4, 0, 0, 0, 0, 6, 0, 0, 0, 3, 0, 2, 7, 0,
    0, 0, 3, 0, 0, 0,
  ];

  const renderComponent = ({
    initialPlay = PLAY,
    ...props
  }: Partial<ISudokuPlayProps> = {}) =>
    render(() => <SudokuPlay initialPlay={initialPlay} {...props} />, {});

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('Should render component', () => {
    renderComponent();
    expect(SudokuField).toBeCalledTimes(PLAY.length);
  });

  it.each`
    key             | startField | targetField
    ${'ArrowUp'}    | ${0}       | ${72}
    ${'ArrowDown'}  | ${72}      | ${0}
    ${'ArrowUp'}    | ${72}      | ${63}
    ${'ArrowDown'}  | ${0}       | ${9}
    ${'ArrowLeft'}  | ${0}       | ${8}
    ${'ArrowRight'} | ${8}       | ${0}
    ${'ArrowLeft'}  | ${1}       | ${0}
    ${'ArrowRight'} | ${7}       | ${8}
  `(
    'Should validate navigation ($key)',
    async ({ key, startField, targetField }) => {
      renderComponent();
      const fields = screen.getAllByRole('textbox');
      await userEvent.click(fields[startField]);
      expect(fields[startField]).toHaveFocus();
      await userEvent.keyboard(`{${key}}`);
      expect(fields[targetField]).toHaveFocus();
    }
  );

  it('Should check workflow with item', () => {
    renderComponent();
    expect(isEffectedItem).not.toBeCalled();
    const element = screen.getAllByRole('textbox')[2];
    fireEvent.focus(element);
    expect(isEffectedItem).toBeCalled();
    fireEvent.keyDown(element, { key: '5' });
    expect(element.textContent).toBe('5');
    fireEvent.blur(element);
  });
});
