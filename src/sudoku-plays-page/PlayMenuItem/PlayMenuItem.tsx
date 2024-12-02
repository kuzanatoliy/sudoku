import { TParentComponent } from 'types';

export interface IPlayMenuItemProps {}

export const PlayMenuItem: TParentComponent<IPlayMenuItemProps> = (props) => {
  return <li>{props.children}</li>;
};
