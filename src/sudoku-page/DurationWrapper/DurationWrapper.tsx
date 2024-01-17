import { createSignal, createEffect } from 'solid-js';
import { TCustomTime } from 'timer-engine';

import styles from './DurationWrapper.module.scss';

export interface IDurationWrapperProps {
  time: TCustomTime;
}

const getFormattedNumber = (val: number) => `${val}`.padStart(2, '0');

export const DurationWrapper = (props: IDurationWrapperProps) => {
  const [view, setView] = createSignal('');

  createEffect(() => {
    setView(
      `${props.time.hours}:${getFormattedNumber(
        props.time.minutes
      )}:${getFormattedNumber(props.time.seconds)}`
    );
  });

  return <div class={styles.container}>{view()}</div>;
};
