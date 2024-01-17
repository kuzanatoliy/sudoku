import { createSignal, createEffect } from 'solid-js';
import { TCustomTime } from 'timer-engine';

export interface IDurationWrapperProps {
  time: TCustomTime;
}

const getFormattedNumber = (val: number) => `${val}`.padStart(2, '0');

export const DurationWrapper = (props: IDurationWrapperProps) => {
  const [view, setView] = createSignal('');

  createEffect(() => {
    if (props.time.hours > 0) {
      return setView(
        `${props.time.hours}:${getFormattedNumber(
          props.time.minutes
        )}:${getFormattedNumber(props.time.seconds)}`
      );
    }

    if (props.time.minutes > 0) {
      return setView(
        `${props.time.minutes}:${getFormattedNumber(props.time.seconds)}`
      );
    }

    return setView(`${props.time.seconds}`);
  });

  return <div>{view()}</div>;
};
