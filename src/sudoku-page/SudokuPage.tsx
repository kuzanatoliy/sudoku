import { createEffect, createSignal } from 'solid-js';
import { useDeviceContext } from 'components';
import { TSudokuValue } from 'sudoku-engine';
import { Duration } from 'timer-engine';

import { SudokuPlay } from './SudokuPlay';
import { ESudokuFieldSize } from './types';

import data from '../../data/plays.json';

export const SudokuPage = () => {
  const deviceState = useDeviceContext();
  const [sudokuPlaySize, setSudokuPlaySize] = createSignal<ESudokuFieldSize>(
    ESudokuFieldSize.DEFAULT
  );

  const duration = new Duration();
  duration.run();

  setTimeout(() => {
    duration.stop();
  }, 10000);

  createEffect(() => {
    const { isTablet, isMobile } = deviceState();
    setSudokuPlaySize(
      isMobile || isTablet ? ESudokuFieldSize.MIDDLE : ESudokuFieldSize.LARGE
    );
  });

  return (
    <>
      <SudokuPlay
        initialPlay={data[0].play as TSudokuValue[]}
        size={sudokuPlaySize()}
      />
    </>
  );
};
