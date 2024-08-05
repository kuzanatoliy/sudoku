import { createEffect, createSignal, Show } from 'solid-js';
import { createQuery } from 'query';
import { TParentComponent } from 'types';
import { useDeviceContext } from 'components';
import { TSudokuValue } from 'sudoku-engine';
import { CustomTime, Duration, TCustomTime } from 'timer-engine';

import { DurationWrapper } from './DurationWrapper';
import { SudokuPlay } from './SudokuPlay';
import { ESudokuFieldSize } from './types';

import styles from './SudokuPage.module.scss';

import data from '../../public/plays.json';

export const SudokuPage: TParentComponent = () => {
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

  const { state, runQuery } = createQuery('/plays.json', { method: 'GET' });

  createEffect(runQuery);

  const initialPlay = data[0].play as TSudokuValue[];

  return (
    <div class={styles.container}>
      <Show when={!state().isLoading}>
        <DurationWrapper time={time()} />
        <SudokuPlay initialPlay={initialPlay} size={sudokuPlaySize()} />
      </Show>
    </div>
  );
};
