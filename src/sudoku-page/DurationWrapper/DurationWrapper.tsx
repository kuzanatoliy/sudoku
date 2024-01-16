import { TCustomTime } from 'timer-engine';

export interface IDurationWrapperProps {
  time: TCustomTime;
}

export const DurationWrapper = (props: IDurationWrapperProps) => {
  return <div>{props.time.seconds}</div>;
};
