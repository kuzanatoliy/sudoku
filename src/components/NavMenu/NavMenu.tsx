import { TParentComponent } from 'types';

import { NavMenuContext } from './NavMenuContext';
import { useNavMenuState } from './hooks';

export const DeviceProvider: TParentComponent = (props) => {
  const navState = useNavMenuState();

  return (
    <NavMenuContext.Provider value={navState}>
      {props.children}
    </NavMenuContext.Provider>
  );
};
