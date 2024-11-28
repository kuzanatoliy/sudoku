import { createEffect, createSignal, Show } from 'solid-js';
import { EHttpMethod, useQuery } from 'query';
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
    ESudokuFieldSize.LARGE
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

  const { state, runQuery } = useQuery<TSudokuPlayData[]>('./plays.json', [], {
    method: EHttpMethod.GET,
  });

  createEffect(() => runQuery());

  return (
    <div class={styles.container}>
      <Show when={state().isStarted && !state().isLoading}>
        <DurationWrapper time={time()} />
        <SudokuPlay
          initialPlay={state().data[0].play}
          size={sudokuPlaySize()}
        />
      </Show>
    </div>
  );
};
