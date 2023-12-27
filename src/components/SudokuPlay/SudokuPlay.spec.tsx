import { render } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vitest } from 'vitest';

import { SudokuPlay, ISudokuPlayProps } from './SudokuPlay';
import { SudokuField } from '../SudokuField';
import {
  //SudokuBattle,
  //TSudokuBattle,
  //TSudokuItemState,
  TSudokuValue,
  //isEffectedItem,
} from 'sudoku-engine';

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

/*vitest.mock('sudoku-engine', async () => {
  const origin =
    await vitest.importActual<typeof import('../SudokuField')>(
      '../SudokuField'
    );
  return {
    SudokuBattle: function (play) {
      return {
        setValue: vitest.fn(),
        getState: vitest.fn().mockImplementation(() =>
          play.map((item) => {
            value: item;
          })
        ),
      };
    },
  };
});*/

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
});
