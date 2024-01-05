import { createContext, Accessor } from 'solid-js';

import { TDeviceState } from './types';

export const DeviceContext = createContext<Accessor<TDeviceState>>(() => {
  throw 'Error: It is neccessary to use DeviceProvider';
});
