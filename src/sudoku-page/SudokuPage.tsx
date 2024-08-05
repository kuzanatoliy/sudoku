import { createEffect, createSignal, Show } from 'solid-js';
import { createQuery } from 'query';
import { TParentComponent, TSudokuPlayData } from 'types';
import { useDeviceContext } from 'components';
import { CustomTime, Duration, TCustomTime } from 'timer-engine';

import { DurationWrapper } from './DurationWrapper';
import { SudokuPlay } from './SudokuPlay';
import { ESudokuFieldSize } from './types';

import styles from './SudokuPage.module.scss';

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

  const { state, runQuery } = createQuery<TSudokuPlayData[]>(
    '/plays.json',
    [],
    {
      method: 'GET',
    }
  );

  createEffect(runQuery);

  return (
    <div class={styles.container}>
      <Show when={!state().isLoading}>
        <DurationWrapper time={time()} />
        <SudokuPlay
          initialPlay={state().data[0].play}
          size={sudokuPlaySize()}
        />
      </Show>
    </div>
  );
};
