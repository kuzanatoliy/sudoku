import { TParentComponent } from 'types';

export interface IPlayMenuProps {
  //initialPlay: TSudokuValue[];
  //size?: ESudokuFieldSize;
}

export const PlayMenu: TParentComponent<IPlayMenuProps> = (props) => {
  return <ul>{props.children}</ul>;
};
