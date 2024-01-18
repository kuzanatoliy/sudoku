import { mergeProps } from 'solid-js';
import { TParentComponent } from 'types';

interface IButton {
  onClick?: () => void;
}

const defaultProps = {
  onClick: () => {},
};

export const Button: TParentComponent<IButton> = (props) => {
  const localProps = mergeProps(defaultProps, props);

  return (
    <button onClick={() => localProps.onClick()}>{localProps.children}</button>
  );
};
