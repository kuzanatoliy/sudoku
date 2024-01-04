//import { createContext } from 'solid-js';
import { TParentComponent } from 'types';

//const DeviceContext = createContext();

export const DeviceProvider: TParentComponent = (props) => {
  //console.log(props.children);

  return <>{props.children}</>;
};
