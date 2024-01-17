import { createEffect, createSignal } from 'solid-js';
import { useDeviceContext } from 'components';
import { TSudokuValue } from 'sudoku-engine';
import { CustomTime, Duration, TCustomTime } from 'timer-engine';

import { DurationWrapper } from './DurationWrapper';
import { SudokuPlay } from './SudokuPlay';
import { ESudokuFieldSize } from './types';

import styles from './SudokuPage.module.scss';

import data from '../../data/plays.json';

export const SudokuPage = () => {
  const deviceState = useDeviceContext();
  const [sudokuPlaySize, setSudokuPlaySize] = createSignal<ESudokuFieldSize>(
    ESudokuFieldSize.DEFAULT
  );
  const [time, setTime] = createSignal<TCustomTime>(new CustomTime(0));

  const duration = new Duration();
  duration.subscribe(setTime);
  duration.run();

  createEffect(() => {
    const { isTablet, isMobile } = deviceState();
    setSudokuPlaySize(
      isMobile || isTablet ? ESudokuFieldSize.MIDDLE : ESudokuFieldSize.LARGE
    );
  });

  const initialPlay = data[0].play as TSudokuValue[];

  return (
    <div class={styles.container}>
      <DurationWrapper time={time()} />
      <SudokuPlay initialPlay={initialPlay} size={sudokuPlaySize()} />
    </div>
  );
};
