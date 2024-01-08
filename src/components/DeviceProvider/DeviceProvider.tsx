import { TParentComponent } from 'types';

import { DeviceContext } from './DeviceContext';
import { useDeviceState } from './hooks';

export const DeviceProvider: TParentComponent = (props) => {
  const deviceState = useDeviceState();

  return (
    <DeviceContext.Provider value={deviceState}>
      {props.children}
    </DeviceContext.Provider>
  );
};
