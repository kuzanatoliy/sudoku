import { TParentComponent } from 'types';

export interface IPlayMenuProps {
  //initialPlay: TSudokuValue[];
  //size?: ESudokuFieldSize;
}

export const PlayMenuItem: TParentComponent<IPlayMenuProps> = (props) => {
  return <li>{props.children}</li>;
};
